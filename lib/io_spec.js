import tape from 'tape'
import io from './io'

tape('create a new io', test => {
  test.plan(2)

  test.equal(typeof io, 'function', 'io should be a function')
  test.equal(typeof io(), 'object', 'creating an instance of io should return an object')
})

tape('adding and removing devices', test => {
  test.plan(2)

  let devices = io().listDevices()
  test.equal(typeof devices, 'object', 'devices should be an object')
  test.equal(devices.length, 0, 'devices have been initialized without any devices')

  devices = io().addDevice({type: 'keyboard'}).listDevices()
  test.equal(devices.length, 1, 'we can add a known device (keyboard)')

  devices = io().addDevice({type: 'gamepad'}).listDevices()
  test.equal(devices.length, 1, 'we can add a known device (gamepad)')

  devices = io()
    .addDevice({type: 'keyboard'})
    .addDevice({type: 'gamepage'})
    .listDivices()
  test.equal(devices.length, 2, 'we can add multiple devices')

  devices.removeDevice()
  test.eqaul(devices.lenth, 1, 'we can remove a device')
})
