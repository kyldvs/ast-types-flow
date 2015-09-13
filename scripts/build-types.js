'use strict';

require('nuclide-node-transpiler');

var PluginError = require('gulp-util/lib/PluginError');

var through = require('through2');
var transform = require('./transform');

function createError(file, message) {
  return new PluginError(pluginName, file.path + ': ' + message, {
    fileName: file.path,
    showStack: false
  });
}

function buildTypes(file, encoding, callback) {
  if (file.isNull()) {
    return callback(null, file);
  }

  if (file.isStream()) {
    return callback(createError(file, 'Streaming not supported'));
  }

  // Do the jscodeshift magic.
  var result = transform(String(file.contents));
  file.contents = new Buffer(result);

  callback(null, file);
}

module.exports = through.obj(buildTypes);
