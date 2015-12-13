'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _eventFactory = require('./eventFactory');

var _eventFactory2 = _interopRequireDefault(_eventFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(0, _tape2.default)('eventFactory', function (test) {
  test.plan(2);

  test.equal(typeof _eventFactory2.default === 'undefined' ? 'undefined' : _typeof(_eventFactory2.default), 'function', 'eventFactory should be a function');
  test.equal(_typeof((0, _eventFactory2.default)()), 'object', 'creating an instance of eventFactory should return an object');
});