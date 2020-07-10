// Задание 4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

/* Строгий режим */
'use strict';
/*solution 1

const formatString = function (string) {
  // твой код
  
  let formatedString = string;
  const arr = string.split('');
  if (arr.length > 40) {
    arr.splice(40, arr.length - 40, '...');
    formatedString = arr.join('');
  }

  return formatedString; */

  // solution 2
const formatString = function (string) {
  // твой код
  if (string.length > 40) {
    string = string.slice(0, 39) + "...";  
  };
  return string;
  };

 

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
