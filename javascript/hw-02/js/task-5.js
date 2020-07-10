// Задание 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

/* Строгий режим */
'use strict';
/* Solution 1
const checkForSpam = function (message) {
  // код
  return (
    message.toLowerCase().includes(`spam`) ||
    message.toLowerCase().includes(`sale`)
  );
};
*/

// Solution 2
const checkForSpam = function (message) {
  // код
  let isSpam=0;
  const forbiddenWorts = ['sale','spam'];
  for (const forbiddenWort of forbiddenWorts) {
    isSpam= message.toLowerCase().includes(forbiddenWort)
    if (isSpam==true) {
      break; 
    }
  }
  return isSpam
};
/*s
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
