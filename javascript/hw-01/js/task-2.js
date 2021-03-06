/* Строгий режим */
'use strict';
/* переменная хранящяя количество товаров на складе */
const total = 100;
/* шаблонная строка выведения в консоль информации */
console.log(`Количество товаров на складе: ${total} шт.`);
/* переменная хранящяя количество единиц товара в заказе */
const ordered = 50;
/* шаблонная строка выведения в консоль информации */
console.log(`Единиц товара в заказе: ${ordered} шт.`);
/* Проверка количества товаров на складе */
if (ordered > total) {
  console.log('На складе недостаточно товаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер!');
}
