export default (state) => {
  const validDevices = ['keyboard', 'gamepad', 'mouse', 'finger']

  return {
    listDevices () {
      return state.devices
    },
    addDevice (device) {
      if (!device) {
        throw new Error('No device specified')
      }

      if (!device.type) {
        throw new Error('No device type specified')
      }

      if (!validDevices.find(item => device.type === item)) {
        throw new Error('Device specified is not known')
      }

      state.devices.push(device)
      return this
    },
    removeDevice (device) {
      if (device) {
        state.devices = state.devices.filter(item => device !== item.type)
      }
      return this
    }
  }
}
