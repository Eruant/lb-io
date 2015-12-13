'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _io = require('./io');

var _io2 = _interopRequireDefault(_io);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(0, _tape2.default)('create a new io', function (test) {
  test.plan(2);

  test.equal(typeof _io2.default === 'undefined' ? 'undefined' : _typeof(_io2.default), 'function', 'io should be a function');
  test.equal(_typeof((0, _io2.default)()), 'object', 'creating an instance of io should return an object');
});