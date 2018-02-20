"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = flattenMods;

function flattenMods(mods) {
  return Object.keys(mods).reduce(function (memo, key) {
    if (mods[key]) {
      memo.push(key);
    }

    return memo;
  }, []);
}

module.exports = exports["default"];