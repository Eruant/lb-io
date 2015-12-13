import tape from 'tape'
import eventFactory from './eventFactory'

tape('eventFactory', test => {
  test.plan(2)

  test.equal(typeof eventFactory, 'function', 'eventFactory should be a function')
  test.equal(typeof eventFactory(), 'object', 'creating an instance of eventFactory should return an object')
})
