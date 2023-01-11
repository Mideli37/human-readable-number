module.exports = function toReadable (number) {
  readableNumbersOneDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
  readableNumbersTwoDigits = ['', 'ten', 'twen', 'thir', "for", 'fif', 'six', 'seven', 'eigh', 'nine']
  readableNumbersTeens = ['', 'ten', 'twen', 'thir', "four", 'fif', 'six', 'seven', 'eigh', 'nine']
  let result = ''
  let strNumber = String(number)
  
  if (number <= 12 ) {
    return readableNumbersOneDigit[number]
  } 
  result = number % 10 != 0 ? readableNumbersOneDigit[number % 10] : ''
  if (number % 100 <= 12 && number % 100 != 0) {
    result = readableNumbersOneDigit[number % 100]
  } else if (number % 100 < 20 && number % 100 != 0) {
    result = `${readableNumbersTeens[number % 100 % 10]}teen`
  } else if (number % 100 >= 20 && number % 100 != 0) {
    result = `${readableNumbersTwoDigits[Math.floor(number % 100/10)]}ty `+ result
  }

  if (number / 100 >= 1) {
    result = `${readableNumbersOneDigit[Math.floor(number / 100)]} hundred ` + result
  }
  return result.trim()
    
  
}
