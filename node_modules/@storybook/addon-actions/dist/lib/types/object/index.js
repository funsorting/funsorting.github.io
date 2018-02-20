'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _createNamedObject = require('./createNamedObject');

var _createNamedObject2 = _interopRequireDefault(_createNamedObject);

var _getObjectName = require('./getObjectName');

var _getObjectName2 = _interopRequireDefault(_getObjectName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEY = '$___storybook.objectName';

var objectType = {
  KEY: KEY,
  // is: (value) => , // not used
  serialize: function serialize(value) {
    return (0, _defineProperty3.default)({}, KEY, (0, _getObjectName2.default)(value));
  },
  deserialize: function deserialize(value) {
    return (0, _createNamedObject2.default)(value, KEY);
  }
};

exports.default = objectType;