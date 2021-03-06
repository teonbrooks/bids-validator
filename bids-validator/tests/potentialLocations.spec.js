const assert = require('assert')
const potentialLocations = require('../utils/files/potentialLocations')
const test_version = '1.2.0'

describe('potentialLocations', () => {
  it('should not return duplicate paths', () => {
    const path = 'data/BIDS-examples-' + test_version + '/ds001'
    const pLs = potentialLocations(path)
    assert.deepEqual(pLs.length, new Set(pLs).size)
  })
  it('.bold files should only return potential locations that include tasknames', () => {
    const path = 'dsTest/sub-01/func/sub-01_task-testing_run-01_bold.json'
    const pLs = potentialLocations(path)
    const anyNonTaskSpecific = pLs.some(
      location => location.indexOf('task') < 0,
    )
    assert.equal(anyNonTaskSpecific, false)
  })
})
