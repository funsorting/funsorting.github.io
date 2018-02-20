'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = isMods;

function isMods(a) {
  return Array.isArray(a) || typeof a === 'object';
}

module.exports = exports['default'];