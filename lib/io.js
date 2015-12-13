"use strict";

var eventFactory = function eventFactory(state) {
  return {
    startListening: function startListening() {},
    stopListening: function stopListening() {}
  };
};

module.exports = function (_ref) {
  var _ref$devices = _ref.devices;
  var devices = _ref$devices === undefined ? [] : _ref$devices;

  var state = {
    devices: devices
  };

  return Object.assign({}, eventFactory(state));
};