export const getRandomNumber = () => Math.round(Math.random() * 25)

export const numberToLetter = number => String.fromCharCode(97 + number)

export const generateLetter = () => numberToLetter(getRandomNumber())
