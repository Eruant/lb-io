import tape from 'tape'
import IO from './io'

tape('create a new io', test => {
  test.plan(2)

  test.equal(typeof IO, 'function', 'io should be a function')
  test.equal(typeof IO(), 'object', 'creating an instance of io should return an object')
})

tape('adding and removing devices', test => {
  test.plan(9)

  test.equal(typeof IO().listDevices, 'function', 'listDevices should be a function')

  let input = IO()
  let devices = input.listDevices()
  test.equal(typeof devices, 'object', 'devices should be an object')
  test.equal(devices.length, 0, 'devices have been initialized without any devices')

  test.equal(typeof input.addDevice, 'function', 'addDevice should be a function')

  input = IO().addDevice({type: 'keyboard'})
  devices = input.listDevices()
  test.equal(devices.length, 1, 'we can add a known device (keyboard)')

  input = IO().addDevice({type: 'gampad'})
  devices = input.listDevices()
  test.equal(devices.length, 1, 'we can add a known device (gamepad)')

  input = IO()
    .addDevice({type: 'keyboard'})
    .addDevice({type: 'gamepage'})

  devices = input.listDevices()
  test.equal(devices.length, 2, 'we can add multiple devices')

  test.equal(typeof input.removeDevice, 'function', 'removeDevice should be a function')

  input.removeDevice({type: 'keyboard'})
  devices = input.listDevices()
  test.equal(devices.length, 1, 'we can remove a device')
})
