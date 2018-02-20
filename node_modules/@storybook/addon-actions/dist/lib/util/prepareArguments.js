'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = prepareArguments;

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prepareArguments(arg) {
  if (arg && typeof arg.preventDefault !== 'undefined') {
    return (0, _stringify2.default)('[' + arg.constructor.name + ']');
  }

  try {
    return (0, _stringify2.default)((0, _index.decycle)(arg));
  } catch (error) {
    return error.toString(); // IE still cyclic.
  }
}