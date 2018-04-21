import {
  getRandomNumber,
  generateLetter,
  numberToLetter
} from './generate-letter'
describe('Random number generation', () => {
  it('getRandomNumber should return a number between 0 & 25', () => {
    const checkedNumber = []
    while (checkedNumber.length < 26) {
      const current = getRandomNumber()
      expect(current).toBeGreaterThanOrEqual(0)
      expect(current).toBeLessThanOrEqual(25)
      if (!checkedNumber.includes(current)) {
        checkedNumber.push(current)
      }
    }
  })

  it('numberToLetter should return a letter between a & z', () => {
    const checkedNumber = []
    while (checkedNumber.length < 26) {
      const current = generateLetter()
      expect(current).toMatch(/[a-z]/)
      if (!checkedNumber.includes(current)) {
        checkedNumber.push(current)
      }
    }
  })

  it('numberToLetter should work', () => {
    const expectedResult = 'abcdefghijklmnopqrstuvwxyz'
    for (let index = 0; index < 26; index++) {
      expect(expectedResult[index]).toBe(numberToLetter(index))
    }
  })
})
