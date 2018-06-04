import { expect } from 'chai'
import { mergeSort } from '../src'

describe('mergeSort', () => {
  const test = [
    {
      testCase: [1, 3, 5, 7, 9],
      result: [1, 3, 5, 7, 9],
    },
    {
      testCase: [9, 7, 5, 3, 1],
      result: [1, 3, 5, 7, 9],
    },
  ]

  test.map((item) => {
    const { testCase, result } = item
    describe(`sort [${testCase.join(', ')}]`, () => {
      it(`should return [${result.join(', ')}]`, () => {
        expect(mergeSort(testCase)).to.be.deep.equal(result)
      })
    })
  })
})
