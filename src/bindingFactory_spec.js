import tape from 'tape'
import bindingFactory from './bindingFactory'

tape('bindingFactory', test => {
  test.plan(5)

  test.equal(typeof bindingFactory, 'function', 'bindingFactory should be a funtion')
  test.equal(typeof bindingFactory(), 'object', 'creating an instance of bindingFactory should return an object')

  const obj = bindingFactory()
  test.equal(typeof obj.addBinding, 'function', 'addBinding should be a function')
  test.equal(typeof obj.removeBinding, 'function', 'removeBinding should be a function')
  test.equal(typeof obj.reassignBinding, 'function', 'reassignBinding should be a function')
})
