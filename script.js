const buttons = document.querySelectorAll('#buttons .wrapper button') // усі кнопки
const input = document.querySelector('#input') // поле виводу тексту
const output = document.querySelector('#result') // поле результату

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const signs = ['+', '-', 'X', '/']

let a = '' // перше число
let b = '' // друге число
let sign = ''
let isB = false // якщо false то наповнюється перше число
let isComma = false // якщо true то кома вже є

buttons.forEach(elem => {
  elem.onclick = e => {
    if (numbers.includes(elem.textContent.toString())) {
      // число
      if (!isB) {
        a += elem.textContent.toString()
        input.innerText = a
      }
      else {
        b += elem.textContent.toString()
        input.innerText = b
      }
    }
    else if (signs.includes(elem.textContent.toString())) {
      // знак
      sign = elem.textContent.toString()
      isB = true
      input.innerText = sign
    }
    else if (elem.textContent.toString() === 'AC') {
      reset()
      input.textContent = ''
      output.textContent = ''
    }
    else if (elem.textContent.toString() === '=') {
      output.innerText = equal()
      input.innerText = ''
      reset()
    }
    else if (elem.textContent.toString() === '.') {
      if (!isComma) {
        isComma = true
        if (!isB) {
          a === '' ? a = '0.' : a += '.'
          input.innerText = a
        }
        else {
          b === '' ? b = '0.' : b += '.'
          input.innerText = b
        }
      }
      else {

      }
    }
    else if (elem.textContent.toString() === '%') {
      if (!isB) {
        a /= 100
        input.innerText = a
      }
      else {
        b /= 100
        input.innerText = b
      }
    }
    else if (elem.textContent.toString() === '+/-') {
      if (!isB) {
        a = -a
        input.innerText = a
      }
      else {
        b = -b
        input.innerText = b
      }
    }

    console.log(a || null, b || null, sign || null)
  }
})

function equal() {
  if (a && b) {
    return a || b || '0'
  }
  else {
    if (sign === '+') {
      return +a + +b
    }
    else if (sign === '-') {
      return a - b
    }
    else if (sign === '/') {
      return a / b
    }
    else if (sign === 'X') {
      return a * b
    }
  }
}

function reset() {
  a = ''
  b = ''
  sign = ''
  isB = false
}