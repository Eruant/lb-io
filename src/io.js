const eventFactory = (state) => {
  return {
    startListening () {
    },
    stopListening () {
    }
  }
}

module.exports = ({devices = []}) => {
  var state = {
    devices: devices
  }

  return Object.assign(
    {},
    eventFactory(state)
  )
}
