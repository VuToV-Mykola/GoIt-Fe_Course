/* Строгий режим */
'use strict';
/* Обьявление переменной credits */
let credits = 23580;
/* Обьявление переменной pricePerDroid */
const pricePerDroid = 3000;
/* Ввод польователем данных */
const numberOfDroid = prompt('Количество дроидов к покупке?');
/* Обьявление переменной message */
let message;
/* Проверка на отмену пользователем */
if (numberOfDroid === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else {
  const totalPrice = pricePerDroid * Number(numberOfDroid);
  totalPrice > credits
    ? console.log('Недостаточно средств на счету!')
    : console.log(
        `Вы купили ${numberOfDroid} дроидов, на счету осталось ${
          credits - totalPrice
        } кредитов.`,
      );
}
