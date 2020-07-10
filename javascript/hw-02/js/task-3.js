// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

/* Строгий режим */
'use strict';

const findLongestWord = function (string) {
  // твой код
  let longestWord;
  let lengthLongestWord = 0;
  let arr = string.split(' ');
  console.log(arr);
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    if (lengthLongestWord > arr[i].length) {
      continue;
    }
    lengthLongestWord = arr[i].length;
    longestWord = arr[i];
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
