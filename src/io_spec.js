import tape from 'tape'
import IO from './io'

tape('create a new io', test => {
  test.plan(2)

  test.equal(typeof IO, 'function', 'io should be a function')
  test.equal(typeof IO(), 'object', 'creating an instance of io should return an object')
})
