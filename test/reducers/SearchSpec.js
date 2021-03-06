import search from './../../src/reducers/search'
import { SEARCH_STARTED, SEARCH_SUCCEEDED, SEARCH_FAILED } from './../../src/actions'

describe('reducers', () => {
  describe('search', () => {
    it('should set initial state', () => {
      expect(search(undefined, {})).toEqual([]);
    })

    it('should handle SEARCH_STARTED', () => {
      expect(search({}, {type: SEARCH_STARTED})).toEqual({});
    })

    it('should handle SEARCH_SUCCEEDED', () => {
      const searchSuccessResult = search({}, {
        type: SEARCH_SUCCEEDED,
        searchResult: {items: []}
      })

      expect(searchSuccessResult).toEqual([])
    })

    it('should handle SEARCH_FAILED', () => {
      expect(search({}, {
        type: SEARCH_FAILED,
        searchError: 'some fake error - ignore me'
      })).toEqual({})
    })
  })
})
