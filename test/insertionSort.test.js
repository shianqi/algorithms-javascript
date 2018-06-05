import { expect } from 'chai'
import { insertionSort } from '../src'

describe('insertionSort', () => {
  const test = [
    {
      testCase: [1, 3, 5, 7, 9],
      result: [1, 3, 5, 7, 9],
    },
    {
      testCase: [9, 7, 5, 3, 1],
      result: [1, 3, 5, 7, 9],
    },
    {
      testCase: [3, 2, 9, 1, 3],
      result: [1, 2, 3, 3, 9],
    },
  ]

  test.map((item) => {
    const { testCase, result } = item
    describe(`sort [${testCase.join(', ')}]`, () => {
      it(`should return [${result.join(', ')}]`, () => {
        expect(insertionSort(testCase)).to.be.deep.equal(result)
      })
    })
  })
})
