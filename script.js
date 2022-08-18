const buttons = document.querySelectorAll('#buttons .wrapper button')
const input = document.querySelector('#input')

buttons.forEach(item => {
  item.addEventListener('click', (e) => {
    switch(item.innerText) {
      case '1': print(1)
      break
      case '2': print(2)
      break
      case '3': print(3)
      break
      case '4': print(4)
      break
      case '5': print(5)
      break
      case '6': print(6)
      break
      case '7': print(7)
      break
      case '8': print(8)
      break
      case '9': print(9)
      break
      case '0': print(0)
      break
      case '`': print('backspace')
      break
      case ',': print(',')
      break
      case 'AC': print('AC')
      break
    }
  })
})

function print(value) {
  if(/\d/g.test(value) === true){
    input.innerText = input.innerText + value.toString()
    console.log(input.innerText)
  }
  else if(value === 'backspace') {
    input.innerText = input.innerText.slice(0,-1)
    console.log(input.innerText)
  }
  else if(value === ',') {
    input.innerText = input.innerText + value.toString()
    console.log(input.innerText)
  }
  else if(value === 'AC'){
    input.innerText = ''
    console.log(input.innerText)
  }
}