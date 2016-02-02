/*global it: true, describe: true */
/*eslint no-console: 0*/

import should from 'should'
import logger from '../src'

describe('shasta-logger', () => {
  it('should be a function', (done) => {
    should.exist(logger)
    logger.should.be.a.function
    done()
  })
})
