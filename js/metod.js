//  SLICE()
// Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки.
// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// Свойство length
// Для того чтобы узнать длину строки
// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47

// выражение && выражение;
// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false

// То есть логическое «И» запинается на лжи и возвращает то на чём запнулось или последний операнд.
// выражение || выражение;
// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true

// А здесь ни одно из условий не выполняется, поэтому получаем false - значение последнего операнда.

// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

// То есть логическое «ИЛИ» запинается на правде и возвращает то на чём запнулось или последний операнд.

// !выражение;
// Оператор ! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false

// if (условие) {
//   // тело if
// }

// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// }
// console.log(cost); // 100]

// if (условие) {
//   // тело if
// } else {
//   // тело else
// }
// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// ТЕРНАРНЫЙ ОПЕРАТОР
// Вычисляется условие.
// Если условие истинно, то есть приводится к true, вычисляется выражение после ?.
// Если условие ложно, то есть приводится к false, вычисляется выражение после :.
// Значение вычисленного выражения возвращается как результат работы тернарного оператора.

// <условие> ? <выражение_если_условие_истинно> : <выражение_если_условие_ложно></выражение_если_условие_ложно>
// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber); // 10

// // Инструкция SWITCH
// switch (значение) {
//   case значение:
//     инструкции;
//     break;

//   case значение:
//     инструкции;
//     break;

//   default:
//     инструкции;
// }
// let cost;
// const subscription = 'premium';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

//  FOR  Цикл со счётчиком
// Переменные-счетчики, по традиции, называются буквами i, j и k.

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// Посчитаем сумму чисел до определенного значения.

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// Оператор break
// Прервать выполнение цикла можно в любой момент. Для этого сущестует оператор break, который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log('Нашли число 3, прерываем выполнение цикла');
//     break;
//   }
// }

// console.log('Лог после цикла');

// Оператор continue
// Прерывает не весь цикл, а только выполнение текущей итерации.
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

// МАССИВЫ !!!

// Массив объявляется открывающей и закрывающей квадратной скобками [] - литералом массива. Внутри скобок каждый элемент массива разделяется запятой.

// const clients = ["Mango", "Poly", "Ajax"];

//    FOR для массива
// const clients = ['mango', 'poly', 'kivi'];
// clients[3] = 'banana';
// const lastElementIndex = clients.length - 1;
// // console.log(clients[2]);
// // console.log(clients.length);
// // console.log(clients);
// // console.log(clients[lastElementIndex]);
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

//  FOR OF для массива и строк
// for (const client of clients) {
//   console.log(client);
// }
// const string = 'say hellow !';
// for (const character of string) {
//   // console.log(character);
//   console.log(string.length);
// }

// const clients = ['mango', 'poly', 'kivi'];
// clients[3] = 'banana';
// const nameFind = 'kivi';
// let message;
// for (const client of clients) {
//   if (client === nameFind) {
//     message = 'yes!';
//     break;
//   }
//   message = 'no!';
// }
// console.log(message);

// const numbers = [2, 1, 5, 6, 7, 23];
// const threshold = 5;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     console.log(numbers[i]);
//     continue;
//   }
//   console.log(`число больше чем ${threshold}: ${numbers[i]}`);
// }
// let a = 5;
// let b = 10;
// // console.log(a, b);
// a = 10;
// b = 25;
// console.log(a, b);

// const a = ['poly'];
// const b = a;
// // console.log(a, b);
// a.push('kivi');
// console.log(a, b);

// МЕТОДЫ МАССИВА

// // SPLIT()-преврфщает строку в массив,разбив по разделителю
// const name = 'mango';
// console.log(name.split(''));
// // join()-соединяет элементы массива в строку
// const words = ['Java', 'is', 'cool'];
// console.log(words.join(''));
// console.log(words.join(' '));
// console.log(words.join('-'));

// indexOf()-возвращает первый индекс в котором эл-т со значением value был найден
// const clients = ['mango', 'poly', 'kivi'];
// console.log(clients.indexOf('kivi'));
// console.log(clients.indexOf('banana'));

// includes()-проверяет есть ли в массиве эл-т value  и возвращает true или false
// const clients = ['mango', 'poly', 'kivi'];
// console.log(clients.includes('banana'));
// console.log(clients.includes('kivi'));

// если много значений
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// const hasFruit = redFruits.includes('cherry');
// if (hasFruit) {
//   console.log(`yes! it's ${fruit}`);
// }

// push()-добавляет 1 или несколько єл-тов в конец массива.ВОЗВРАЩАЕТ ДЛИНУ МАССИВА ПОСЛЕ ДОБАВЛЕНИЯ ЄЛ-ТОВ
// const numbers = [];
// console.log(numbers);
// numbers.push(1, 3, 6);
// console.log(numbers);
// numbers.push(13);
// console.log(numbers);

// pop()- удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод возвращает undefined.
// const numbers = [2, 8, 9, 45, 76];
// numbers.pop();
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers.unshift(5));
// console.log(numbers.shift(2));
// console.log(numbers);

// SLICE()-slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// // Если begin и end не указаны, будет создана полная копия исходного массива.
// console.log(redFruits.slice());
// console.log(redFruits.slice(0, 2));

// SPLICE()
// Удаляет, добавляет и заменяет элементы в произвольном месте массива.

// Удаление
// Чтобы удалить элементы в массиве, передаются два аргумента.
// const deletedRedFruits = redFruits.splice(1, 2);
// console.log(deletedRedFruits);

// Добавление
// Для того чтобы добавить один или несколько элементов в массив, необходимо передать три или более аргумента, при этом второй аргумент должен быть равен нулю.

// splice(position, 0, new_element_1, new_element_2, ...)

// Аргумент position указывает начальную позицию в массиве, куда будут вставлены новые элементы.
// Второй аргумент это ноль, он говорит методу не удалять элементы в месте добавления новых.
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// redFruits.splice(1, 0, 'banana');
// console.log(redFruits);

// Замена
// Замена это операция добавления в которой удаляются элементы в месте добавления новых. Для этого необходимо передать минимум три аргумента. Количество удаляемых и добавляемых элементов может не совпадать.

// splice(position, num, new_element_1, new_element_2, ...)

// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// redFruits.splice(3, 1, 'banana');
// console.log(redFruits);

// CONCAT()--обьединяет 2 и более массивов в один.

// const oldClients = ['margo', 'kiwi', 'poly'];
// const newClients = ['sara', 'bella'];
// const allClients = oldClients.concat(newClients);
// const newAllClients = newClients.concat(oldClients);
// const allNewClients = newClients.concat(newClients);
// console.log(allClients);
// console.log(newAllClients);
// console.log(allNewClients);

// Деструктуризация в циклах

// При переборе массива объектов циклом for...of получаеются множественные обращения к свойствам объекта.
// Для того чтобы сократить количество повторений можно деструктуризировать свойства объекта в локальные переменные в теле цикла.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// УДОБНЕЕ СДЕЛАТЬ ТАК
// // for (const book of books) {
// //   const { title, author, rating } = book;

// //   console.log(title);
// //   console.log(author);
// //   console.log(rating);
// // }

// Метод forEach

// Перебирающий метод массива который используется как замена циклов for и for...of при работе с коллекцией данных.

// массив.forEach(function callback(element, index, array) {
//   // Тело коллбек-функции
// });

// Поэлементно перебирает массив.
// Вызызвает коллбек-функцию для каждого элемента массива.
// Ничего не возвращает.

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach

// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// Стрелочные функции

// Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.

// const add = (a, b, c) => {
//   return a + b + c;
// };

// Если параметр один, его объявление может быть без круглых скобок.

// const add = a => {
//   return a + 5;
// };

// Если параметров нет, то обязательно должны быть пустые круглые скобки.

// const greet = () => {
//   console.log("Привет!");
// };

// const add = (a, b, c, d) => {
//   const sum = a + b;
//   const sum1 = c * d;
//   return sum + sum1;
// };

// console.log(add(2, 3, 4, 5));
// console.log(add(28, 10, 4, 5));
