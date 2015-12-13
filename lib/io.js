'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deviceFactory = require('./deviceFactory');

var _deviceFactory2 = _interopRequireDefault(_deviceFactory);

var _eventFactory = require('./eventFactory');

var _eventFactory2 = _interopRequireDefault(_eventFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$devices = _ref.devices;
  var devices = _ref$devices === undefined ? [] : _ref$devices;

  var state = {
    devices: devices
  };

  return Object.assign({}, (0, _eventFactory2.default)(state), (0, _deviceFactory2.default)(state));
};