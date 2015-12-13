const eventFactory = (state) => {
  return {
    startListening () {
    },
    stopListening () {
    }
  }
}

const deviceFactory = (state) => {
  return {
    listDevices () {
      return state.devices
    },
    addDevice (device) {
      state.devices.push(device)
      return this
    },
    removeDevice (device) {
      state.devices = state.devices.filter(item => device.type !== item.type)
      return this
    }
  }
}

module.exports = ({devices = []} = {}) => {
  var state = {
    devices: devices
  }

  return Object.assign(
    {},
    eventFactory(state),
    deviceFactory(state)
  )
}
