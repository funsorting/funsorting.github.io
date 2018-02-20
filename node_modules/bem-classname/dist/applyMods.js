'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = applyMods;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _flattenMods = require('./flattenMods');

var _flattenMods2 = _interopRequireDefault(_flattenMods);

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

function applyMods(base, mods) {
  if (mods === undefined) {
    return base;
  }

  if (!Array.isArray(mods) && typeof mods !== 'object') {
    mods = [mods];
  } else if (!Array.isArray(mods) && typeof mods === 'object') {
    mods = (0, _flattenMods2['default'])(mods);
  }

  return [base].concat(mods.filter(_identity2['default']).map(function (mod) {
    return '' + base + '--' + mod;
  })).join(' ');
}

module.exports = exports['default'];