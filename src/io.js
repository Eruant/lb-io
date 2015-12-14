import deviceFactory from './deviceFactory'
import eventFactory from './eventFactory'
import bindingFactory from './bindingFactory'

export default ({devices = []} = {}) => {
  var state = {
    devices: devices,
    bindings: []
  }

  return Object.assign(
    {},
    eventFactory(state),
    deviceFactory(state),
    bindingFactory(state)
  )
}
