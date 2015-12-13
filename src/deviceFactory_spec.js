import tape from 'tape'
import deviceFactory from './deviceFactory'

tape('deviceFactory', test => {
  test.plan(17)

  test.equal(typeof deviceFactory, 'function', 'deviceFactory should be a factory')

  let state = {
    devices: []
  }
  let obj = deviceFactory(state)
  test.equal(typeof obj, 'object', 'deviceFactory should return an object')
  test.equal(typeof obj.listDevices, 'function', 'listDevices should be a function')
  test.equal(typeof obj.addDevice, 'function', 'addDevice should be a function')
  test.equal(typeof obj.removeDevice, 'function', 'removeDevice should be a function')

  test.equal(obj.listDevices().length, 0, 'listDevices should retun an array like object with no devices')

  test.throws(() => {
    obj.addDevice()
  }, 'adding an empty device should fail')

  test.throws(() => {
    obj.addDevice({})
  }, 'adding a device requires a type')

  test.throws(() => {
    obj.addDevice({type: 'unicorn'})
  }, 'adding a unicorn should fail as it is an unknown device')

  obj.addDevice({type: 'keyboard'})
  test.equal(obj.listDevices().length, 1, 'a device should have been added')
  test.equal(obj.listDevices()[0].type, 'keyboard', 'a keyboard should have been added')

  obj.addDevice({type: 'gamepad'})
  test.equal(obj.listDevices().length, 2, 'another device should have been added')
  test.equal(obj.listDevices()[0].type, 'keyboard', 'a keyboard should have been added')
  test.equal(obj.listDevices()[1].type, 'gamepad', 'a gamepad should have been added')

  obj.removeDevice()
  test.equal(obj.listDevices().length, 2, 'removeDevice should do nothing if there is no device to remove')
  
  obj.removeDevice('keyboard')
  test.equal(obj.listDevices().length, 1, 'removeDevice should remove the specified device')
  test.equal(obj.listDevices()[0].type, 'gamepad', 'removeDevices should reduce the size of the array')
})
