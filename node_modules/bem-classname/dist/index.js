'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = b_;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _applyMods = require('./applyMods');

var _applyMods2 = _interopRequireDefault(_applyMods);

var _isMods = require('./isMods');

var _isMods2 = _interopRequireDefault(_isMods);

function bem(block, element) {
  var mods = arguments[2] === undefined ? [] : arguments[2];

  return (0, _applyMods2['default'])('' + block + '__' + element, mods);
}

function bm(block) {
  var mods = arguments[1] === undefined ? [] : arguments[1];

  return (0, _applyMods2['default'])(block, mods);
}

function b_() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    throw new Error('You need to specify block name');
  } else if (args.length === 1) {
    return args[0];
  } else if (args.length === 2 && (0, _isMods2['default'])(args[1])) {
    return bm.apply(null, args);
  } else {
    return bem.apply(null, args);
  }
}

module.exports = exports['default'];