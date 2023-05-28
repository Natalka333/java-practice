// // Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// function includes(array, value) {
//   // Change code below this line
//   array = [];
//   for (let i = 0; i <= array.length; i += 1) {
//     array = [i];
//     if ([i] === value) {
//       return true;
//     }
//     return false;
//   }
// }
// function includes(array, value) {
//   // Change code below this line
//   for (const element of array) {
//     if (element === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
// console.log(Boolean(includes([1, 2, 3, 4, 5], 3)));
// console.log(Boolean(includes([1, 2, 3, 4, 5], 17)));
// console.log(
//   Boolean(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'))
// );
// console.log(
//   Boolean(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'))
// );
// console.log(Boolean(includes(['apple', 'plum', 'pear', 'orange'], 'plum')));
// console.log(Boolean(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi')));

// return --ЭТО ВОЗВРАТ РЕЗУЛЬТАТА ИЗ ФУНКЦИИ
// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   console.log('выполняется тело функции!');

//   return x + y;
// };
// const r1 = add(5, 3);
// console.log(r1);

// const r2 = add(59, 2);
// console.log('r2:', r2);

// НАЙДИ САМОЕ МАЛЕНЬКОЕ ЧИСЛО
// const findSmallestNumber = function (numbers) {
//   let smallestNumber = [0];
//   for (let number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };
// console.log(findSmallestNumber([3, 27, 5, -3, 87]));

// НАПИШИ ФУНКЦИЮ "инверсия'КОТОРАЯ ЗАМЕНЯЕТ БУКВЫ С НИЖНЕГО РЕГИСТРА НА ВЕРХНИЙ И НАОБОРОТ
// const changeCase = function (string) {

//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// };
// console.log(changeCase('mdUHDd'));
// console.log(changeCase('mkdjybJvb'));

// НАПИШИ ФУНКЦИЮ slugyfy(string) КОТОРАЯ ПОЛУЧАЕТ СТРОКУ И ВОЗВРАЩАЕТ URL-slug
// const slugify = function (string) {
//   // const normalizedString = string.toLowerCase();
//   // const words = normalizedString.split(' ');
//   // const slug = words.join('-');

//   // return slug;

// // можно написать одной строкой
// 	return string.toLowerCase().split(' ').join('-');

// };
// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesom'));

// ПЕРЕДЕЛАТЬ ПСЕВДОМАССИВ В ОБЫЧНЫЙ МАССИВ С КОТОРЫМ МОЖНО РАБОТАТЬ
// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6);
// ИЛИ БОЛЕЕ СОВРЕМЕННЫЙ СПОСОБ!!!
// const fn = function (...args) {
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6);
