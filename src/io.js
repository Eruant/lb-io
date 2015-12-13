import deviceFactory from './deviceFactory'
import eventFactory from './eventFactory'

export default ({devices = []} = {}) => {
  var state = {
    devices: devices
  }

  return Object.assign(
    {},
    eventFactory(state),
    deviceFactory(state)
  )
}
