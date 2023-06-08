// let admin, name;
// name = 'ivan';
// admin = name;
// alert(name);

// let ourPlanetName = 'Земля';
// alert(ourPlanetName);

// let inlineUser;
// inlineUser = '1';
// console.log(inlineUser);

// alert(NaN ** 0);
// исключение когда не NaN   а 1

// буква "n" у кінці означає, що це число типу BigInt
// const bigInt = 1234567890123456789012345678901234567890n;

// ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ

// let name = prompt('Як вас звати?', '');
// alert(name);
// let age = prompt('Сколько вам лет?', '');
// alert(age);

// const userName = 'Hi , Im Mango';
// // console.log('Приветики', userName);
// // alert(userName);

// let age = prompt('How old are you?', 18);
// alert(`You are ${age} years old`);
// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// let isBoss = confirm('Are you a boss?');
// alert(isBoss);

// let a = 5;
// let b = 3;
// let c = 9;
// c *= a;
// console.log(c);

// СЧЕТЧИК
// let counter = 0;

// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }

// ПРОДАТЬ ЯБЛОКИ ПОКА НЕ ЗАКОНЧАТСЯ С ШАГОМ 2

// let apple = 0;
// const saleApple = 10;
// while (apple < saleApple) {
//   console.log(apple);
//   apple += 2;
// }

// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

// сумма чисел до определенного числа(3)
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// Вспомним про операцию a % b и выведем остаток от деления используя цикл.

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// let num = 10;
// for (let i = 0; i <= num; i += 2) {
//   console.log(`${num} % ${i} = `, num % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log('Нашли число 3, прерываем выполнение цикла');
//     break;
//   }
// }

// console.log('Лог после цикла');

// Используем цикл для вывода только нечетных чисел. Для чётных i срабатывает continue, выполнение тела прекращается и управление передаётся на следующую итерацию.

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

// const num = 15;
// for (let i = 0; i <= num; i += 1) {
//   console.log(i);
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log('четное число i', i);
// }

// МАССИВЫ
// создай массив и обратись по индексу к
// const frutes = ['apple', 'orange', 'kivi', 'banana'];
// // console.log(frutes[0]);
// // console.log(frutes[1]);
// // console.log(frutes[3]);
// // измени одно значение на другое
// frutes[2] = 'strawbery';
// // console.log(frutes);
// // выведи длину массива и выведи последний элемент
// // console.log(frutes.length);
// // console.log(frutes.length - 1);
// const lastfrutes = frutes.length - 1;
// console.log(lastfrutes);
// console.log(frutes[lastfrutes]);

// перебери массив циклом FOR
// const frutes = ['apple', 'orange', 'kivi', 'banana'];
// for (let i = 0; i < frutes.length; i += 1) {
//   // console.log(i);  -индекс
//   // console.log(frutes[i]);  -навание
// }

// перебор массива с  FOR & OF
// const string = 'javascript';

// for (const character of string) {
//   // console.log(character); по буквам перебор
// }

// const frutes = ['apple', 'orange', 'kivi', 'banana'];
// for (const frute of frutes) {
//   console.log(frute);
// }

// ищем есть ли фрукт в нашем массиве
// const frutes = ['apple', 'orange', 'kivi', 'banana'];
// const fruteNew = 'cherry';
// // const fruteNew = 'apple';
// let message;
// for (const frute of frutes) {
//   if (frute === fruteNew) {
//     message = 'Он есть!';
//     break;
//   }
//   message = 'Нет такого';
// }
// console.log(message);

// SPLIT.() превращает строку в массив
// const name = 'Nataly';
// console.log(name.split(''));
// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]

// join.() соединяет элементы массива в строку
// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words.join('')); // "JavaScriptэтоинтересно"
// console.log(words.join(' ')); // "JavaScript это интересно"
// console.log(words.join('-')); // "JavaScript-это-интересно"

//  PUSH -- POP добавляют и удаляют крайний элемент массива в конце  SHIFT(удаляет) --UNSHIFT(добавляет) НО В НАЧАЛЕ МАССИВА!!

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.shift()); //  1
// console.log(numbers); // [2, 3, 4, 5]

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.unshift(3)); //  3
// console.log(numbers); // [3, 1, 2, 3, 4, 5]

//  SLICE --копия массива но изменяет его
// const frutes = ['apple', 'orange', 'kivi', 'banana'];
// console.log(frutes.slice(1, 3)); ['orange', 'kivi']
// console.log(frutes);
// Если не указан end, копирование будет от start и до конца исходного массива.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// SPLICE-- удаление, добавление,замена в массиве!

// const frutes = ['apple', 'orange', 'kivi', 'banana'];
// splice(position, num)
// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов

// const deleteFrutes = frutes.splice(1, 2);
// console.log(frutes); ['apple', 'banana'];

// splice(position, 0, new_element_1, new_element_2, ...)
// Аргумент position указывает начальную позицию в массиве, куда будут вставлены новые элементы.
// Второй аргумент это ноль, он говорит методу не удалять элементы в месте добавления новых.
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.

// const addFrutes = frutes.splice(1, 0, 'mango', 'cherry');
// console.log(frutes);   ['apple', 'mango', 'cherry', 'orange', 'kivi', 'banana']

// splice(position, num, new_element_1, new_element_2, ...)
// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.

// const changeFrutes = frutes.splice(0, 1, 'mango', 'cherry');
// console.log(frutes);  (5)['mango', 'cherry', 'orange', 'kivi', 'banana']

// function add(a, d, r) {
//   add = a * d * r;
// }
// add(2, 4, 5);
// console.log(add);

// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// console.log('Лог до вызова функции multiply');
// multiply(2, 3, 5); // Результат умножения равен 30
// console.log('Лог после вызова функции multiply');

// РАННИЙ ВОЗВРАТ

// function withdraw(amout, balance) {
//   if (amout === 0) {
//     console.log('Введите сумму больше нуля');
//     return;
//   }

//   if (amout > balance) {
//     console.log('Недостаточно средств на счете');
//     return;
//   }

//   console.log('Операция успешна');
// }
// withdraw(0, 500);
// withdraw(700, 500);
// withdraw(300, 500);
