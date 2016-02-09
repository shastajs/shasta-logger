/*global it: true, describe: true */
/*eslint no-console: 0*/

import should from 'should'
import { middleware } from '../src'

describe('shasta-logger', () => {
  it('middleware should be a function', (done) => {
    should.exist(middleware)
    middleware.should.be.a.function
    done()
  })
})
