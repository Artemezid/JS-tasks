const a = +prompt('Введите число')

if (typeof +a !== 'number') {
  alert ('Упс, кажется, вы ошиблись')
} else if (+a % 2 === 0){
  alert ('Число чётное')
} else {
  alert ('Число нечётное')
}
