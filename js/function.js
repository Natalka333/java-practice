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

// Колбэк-функция

// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// // Вызываем функцию greet и выводим результат в консоль
// console.log(greet('Манго')); // Добро пожаловать Манго.

// // Выводим функцию greet в консоль не вызывая её
// console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }

// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall('Манго');

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let propValues = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       propValues.push(product[propName]);
//     }
//   }
//   return propValues;
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   return { completed, category, priority, ...data };

//   // Change code above this line
// }
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// console.log(makeTask({ text: 'Buy bread' }));

// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
// function add(...args) {
//   // Change code above this line
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// console.log(add(15, 27));

// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.
// function addOverNum(firstParam, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstParam) {
//       total += arg;
//     }
//   }
//   return total;
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
