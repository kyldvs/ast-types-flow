'use babel';

var jscodeshift = require('jscodeshift');

function transform(source) {
  const j = jscodeshift;
  const root = j(source);

  // Collect all the types we will be exporting.

  const types = new Map();
  const props = new Map();
  root
    .find(j.TypeAlias, {id: {type: 'Identifier'}})
    .forEach(p => {
      const n = p.node;
      const type = n.id.name;
      types.set(type, new Set());
      props.set(type, []);
      const comments = [];
      if (n.right.type === 'ObjectTypeAnnotation') {
        Array.prototype.push.apply(comments, n.right.comments || []);
        n.right.properties.forEach(property => {
          Array.prototype.push.apply(comments, property.comments || []);
          // Re-create the property.
          props.get(type).push(j.objectTypeProperty(
            j.identifier(property.key.name),
            property.value, // TODO: Re-create this better.
            !!property.optional
          ));
        });
      }
      comments.forEach(comment => {
        const value = comment.value;
        if (/extends (\w+, )*\w+$/.test(value)) {
          value.replace('extends', '').trim().split(', ').forEach(superType => {
            types.get(type).add(superType);
          })
        }
      });
    });

  // Fully resolve all types.

  const maxDepth = 10;
  for (let i = 0; i < maxDepth; i++) {
    for (let [type, supers] of types) {
      for (let superType of supers) {
        for (let subType of types.get(superType)) {
          supers.add(subType);
        }
      }
    }
  }

  // Flip the type map.

  const reverse = new Map();
  for (let [type, supers] of types) {
    reverse.set(type, new Set());
  }
  for (let [type, supers] of types) {
    for (let superType of supers) {
      reverse.get(superType).add(type);
    }
  }

  // Build the props of each type definition.

  const resolvedProps = new Map();
  for (let [type, supers] of types) {
    // Copy existing types.
    resolvedProps.set(type, props.get(type).slice(0));

    // Hack to make sure everything is structurally unique.
    resolvedProps.get(type).unshift(j.objectTypeProperty(
      j.identifier('_' + type),
      j.voidTypeAnnotation(),
      true
    ));

    // Add the type field.
    resolvedProps.get(type).unshift(j.objectTypeProperty(
      j.identifier('type'),
      j.stringLiteralTypeAnnotation(type, '\'' + type + '\''),
      false
    ));

    for (let superType of supers) {
      Array.prototype.push.apply(
        resolvedProps.get(type),
        props.get(superType)
      );
    }
  }

  // Replace every type with its concrete props.

  root
    .find(j.TypeAlias, {id: {type: 'Identifier'}})
    .forEach(p => {
      const n = p.node;
      const name = n.id.name;
      if (!resolvedProps.has(name)) {
        return;
      }
	  p.replace(j.typeAlias(
        n.id,
        null,
        j.objectTypeAnnotation(resolvedProps.get(name))
      ));
    });

  // Save the concrete types.

  const concreteTypes = new Map();
  root
    .find(
      j.TypeAlias,
      {
        id: {type: 'Identifier'},
        right: {type: 'ObjectTypeAnnotation'}
      }
    )
    .forEach(p => {
      const n = p.node;
      const name = n.id.name;
      concreteTypes.set(name, n.right);
    });

  // Replace the abstract types.

  root
    .find(
      j.TypeAlias,
      {
        id: {type: 'Identifier'},
        right: {type: 'ObjectTypeAnnotation'}
      }
    )
    .forEach(p => {
      const n = p.node;
      const name = n.id.name;
      if (reverse.get(name).size === 0) {
        return;
      }
      const unionTypes = [];
      for (let reverseType of reverse.get(name)) {
        // Make sure the reverse type is also abstract though.
        if (reverse.get(reverseType).size === 0) {
          unionTypes.push(concreteTypes.get(reverseType));
        }
      }
      n.right = j.unionTypeAnnotation(unionTypes);
      p.replace(n);
    });

  return root.toSource();
}

module.exports = transform;
