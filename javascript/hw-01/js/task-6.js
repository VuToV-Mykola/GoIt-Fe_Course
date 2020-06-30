/* Строгий режим */
'use strict';
/* Обьявление переменной total */
let total = 0;
/* Проверка на отмену пользователем */
while (true) {
  let input = prompt('Ввод числа:');
  if (input === null) {
    alert('Отменено пользователем!');
    break;
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += input;
  }
}
if (total !== 0) {
  alert(`Общая сумма чисел равна ${total}`);
}
