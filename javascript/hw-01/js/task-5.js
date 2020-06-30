/* Строгий режим */
'use strict';
/* Обьявление переменной cost */
let cost = 0;
/* Ввод польователем данных */
const inputCountry = prompt('Страна для оформления доставки ?');
/* Проверка на отмену пользователем */
if (inputCountry === null) {
  alert('Отменено пользователем!');
} else {
  const country =
    inputCountry.toLowerCase()[0].toUpperCase() +
    inputCountry.toLowerCase().slice(1);
  switch (country) {
    case 'Китай':
      cost = 100;
      break;
    case 'Чили':
      cost = 250;
      break;
    case 'Австралия':
      cost = 170;
      break;
    case 'Индия':
      cost = 80;
      break;
    case 'Ямайка':
      cost = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
  if (cost !== 0) {
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
  }
}
