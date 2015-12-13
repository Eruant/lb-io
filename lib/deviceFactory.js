'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (state) {
  var validDevices = ['keyboard', 'gamepad', 'mouse', 'finger'];

  return {
    listDevices: function listDevices() {
      return state.devices;
    },
    addDevice: function addDevice(device) {
      if (!device) {
        throw new Error('No device specified');
      }

      if (!device.type) {
        throw new Error('No device type specified');
      }

      if (!validDevices.find(function (item) {
        return device.type === item;
      })) {
        throw new Error('Device specified is not known');
      }

      state.devices.push(device);
      return this;
    },
    removeDevice: function removeDevice(device) {
      if (device) {
        state.devices = state.devices.filter(function (item) {
          return device !== item.type;
        });
      }
      return this;
    }
  };
};