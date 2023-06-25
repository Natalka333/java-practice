//   ФУНКЦИИ
// // 1. Объявление функции multiply
// function multiply() {
//   // Тело функции
//   console.log('Это лог при вызове функции multiply');
// }
// // 2. Вызовы функции multiply
// multiply(); // 'Это лог при вызове функции multiply'
// multiply(); // 'Это лог при вызове функции multiply'
// multiply(); // 'Это лог при вызове функции multiply'

// function multiply(a, b, c) {
//   // console.log(multiply);
//   return a * b * c;
// }
// console.log(multiply(5, 8, 5));
// console.log(multiply(1, 7, 2));

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// ARGUMENT -псевдомассив
// function multiply() {
//   let total = 1;
//   for (const argument of arguments) {
//     // total *= argument;
//     total /= argument;
//   }
//   // return total;
//   return total.toFixed(2);
// }
// console.log(multiply(3, 6, 3));
// function fn() {
//   const args = Array.from(arguments);
// }
// console.log(fn);

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log('введите сумму больше 0');
//     return;
//   }
//   if (amount > balance) {
//     console.log('недостаточно средств');
//     return;
//   }
//   console.log('операция успешна');
// }
// withdraw(0, 100);
// withdraw(5000, 700);
// withdraw(300, 1000);

// REST --СБОР ВСЕХ АРГУМЕНТОВ ФУНКЦИИ
// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// multiply('ab', 'cr', 'jk');

// сбор части аргументов функции
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// // // Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// // function includes(array, value) {
// //   // Change code below this line
// //   array = [];
// //   for (let i = 0; i <= array.length; i += 1) {
// //     array = [i];
// //     if ([i] === value) {
// //       return true;
// //     }
// //     return false;
// //   }
// // }
// // function includes(array, value) {
// //   // Change code below this line
// //   for (const element of array) {
// //     if (element === value) {
// //       return true;
// //     }
// //   }
// //   return false;
// //   // Change code above this line
// // }
// // console.log(Boolean(includes([1, 2, 3, 4, 5], 3)));
// // console.log(Boolean(includes([1, 2, 3, 4, 5], 17)));
// // console.log(
// //   Boolean(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'))
// // );
// // console.log(
// //   Boolean(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'))
// // );
// // console.log(Boolean(includes(['apple', 'plum', 'pear', 'orange'], 'plum')));
// // console.log(Boolean(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi')));

// // return --ЭТО ВОЗВРАТ РЕЗУЛЬТАТА ИЗ ФУНКЦИИ
// // const add = function (x, y) {
// //   console.log(x);
// //   console.log(y);
// //   console.log('выполняется тело функции!');

// //   return x + y;
// // };
// // const r1 = add(5, 3);
// // console.log(r1);

// // const r2 = add(59, 2);
// // console.log('r2:', r2);

// // НАЙДИ САМОЕ МАЛЕНЬКОЕ ЧИСЛО
// // const findSmallestNumber = function (numbers) {
// //   let smallestNumber = [0];
// //   for (let number of numbers) {
// //     if (number < smallestNumber) {
// //       smallestNumber = number;
// //     }
// //   }
// //   return smallestNumber;
// // };
// // console.log(findSmallestNumber([3, 27, 5, -3, 87]));

// // НАПИШИ ФУНКЦИЮ "инверсия'КОТОРАЯ ЗАМЕНЯЕТ БУКВЫ С НИЖНЕГО РЕГИСТРА НА ВЕРХНИЙ И НАОБОРОТ
// // const changeCase = function (string) {

// //   const letters = string.split('');
// //   let invertedString = '';

// //   for (const letter of letters) {
// //     const isInLowerCase = letter === letter.toLowerCase();

// //     invertedString += isInLowerCase
// //       ? letter.toUpperCase()
// //       : letter.toLowerCase();
// //   }

// //   return invertedString;
// // };
// // console.log(changeCase('mdUHDd'));
// // console.log(changeCase('mkdjybJvb'));

// // НАПИШИ ФУНКЦИЮ slugyfy(string) КОТОРАЯ ПОЛУЧАЕТ СТРОКУ И ВОЗВРАЩАЕТ URL-slug
// // const slugify = function (string) {
// //   // const normalizedString = string.toLowerCase();
// //   // const words = normalizedString.split(' ');
// //   // const slug = words.join('-');

// //   // return slug;

// // // можно написать одной строкой
// // 	return string.toLowerCase().split(' ').join('-');

// // };
// // console.log(slugify('Top 10 benefits of React framework'));
// // console.log(slugify('Azure Static Web Apps are Awesom'));

// // ПЕРЕДЕЛАТЬ ПСЕВДОМАССИВ В ОБЫЧНЫЙ МАССИВ С КОТОРЫМ МОЖНО РАБОТАТЬ
// // const fn = function () {
// //   console.log(arguments);

// //   const args = Array.from(arguments);
// //   console.log(args);
// // };

// // fn(1, 2, 3);
// // fn(1, 2, 3, 4, 5);
// // fn(1, 2, 3, 4, 5, 6);
// // ИЛИ БОЛЕЕ СОВРЕМЕННЫЙ СПОСОБ!!!
// // const fn = function (...args) {
// //   console.log(args);
// // };

// // fn(1, 2, 3);
// // fn(1, 2, 3, 4, 5);
// // fn(1, 2, 3, 4, 5, 6);

// // Колбэк-функция

// // function greet(name) {
// //   return `Добро пожаловать ${name}.`;
// // }

// // // Вызываем функцию greet и выводим результат в консоль
// // console.log(greet('Манго')); // Добро пожаловать Манго.

// // // Выводим функцию greet в консоль не вызывая её
// // console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }

// // function greet(name) {
// //   console.log(`Добро пожаловать ${name}.`);
// // }

// // Функция высшего порядка
// // function registerGuest(name, callback) {
// //   console.log(`Регистрируем гостя ${name}.`);
// //   callback(name);
// // }

// // registerGuest('Манго', greet);

// // function processCall(recipient) {
// //   // Имитируем доступность абонента случайным числом
// //   const isRecipientAvailable = Math.random() > 0.5;

// //   if (!isRecipientAvailable) {
// //     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
// //     // Логика активации автоответчика
// //   } else {
// //     console.log(`Соединяем с ${recipient}, ожидайте...`);
// //     // Логика принятия звонка
// //   }
// // }

// // processCall('Манго');

// // function repeatLog(n) {
// //   for (let i = 0; i < n; i += 1) {
// //     console.log(i);
// //   }
// // }

// // repeatLog(5);

// // const products = [
// //   { name: 'Radar', price: 1300, quantity: 4 },
// //   { name: 'Scanner', price: 2700, quantity: 3 },
// //   { name: 'Droid', price: 400, quantity: 7 },
// //   { name: 'Grip', price: 1200, quantity: 9 },
// // ];

// // function getAllPropValues(propName) {
// //   // Change code below this line
// //   let propValues = [];
// //   for (const product of products) {
// //     if (product.hasOwnProperty(propName)) {
// //       propValues.push(product[propName]);
// //     }
// //   }
// //   return propValues;
// // }
// // console.log(getAllPropValues('name'));
// // console.log(getAllPropValues('quantity'));
// // console.log(getAllPropValues('price'));
// // console.log(getAllPropValues('category'));

// // function makeTask(data) {
// //   const completed = false;
// //   const category = 'General';
// //   const priority = 'Normal';
// //   // Change code below this line
// //   return { completed, category, priority, ...data };

// //   // Change code above this line
// // }
// // console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// // console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// // console.log(makeTask({ text: 'Buy bread' }));

// // Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
// // function add(...args) {
// //   // Change code above this line
// //   let sum = 0;
// //   for (const arg of args) {
// //     sum += arg;
// //   }
// //   return sum;
// // }
// // console.log(add(15, 27));

// // Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.
// // function addOverNum(firstParam, ...args) {
// //   let total = 0;

// //   for (const arg of args) {
// //     if (arg > firstParam) {
// //       total += arg;
// //     }
// //   }
// //   return total;
// // }
// // console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// // Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// // Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

// // Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.
// // const bookShelf = {
// //   books: ['The last kingdom', 'The guardian of dreams'],
// //   getBooks() {
// //     return 'Returning all books';
// //   },
// //   addBook(bookName) {
// //     return `Adding book ${bookName}`;
// //   },
// //   removeBook(bookName) {
// //     return `Deleting book ${bookName}`;
// //   },
// //   updateBook(oldName, newName) {
// //     return `Updating book ${oldName} to ${newName}`;
// //   },
// // };
// // const bookShelf = {
// //   books: ['Последнее королевство'],
// //   getBooks() {
// //     return this.books;
// //   },
// //   addBook(bookName) {
// //     this.books.push(bookName);
// //   },
// //   removeBook(bookName) {
// //     const bookIndex = this.books.indexOf(bookName);
// //     this.books.splice(bookIndex, 1);
// //   },
// // };

// // console.log(bookShelf.getBooks()); // ["Последнее королевство"]
// // bookShelf.addBook('Мгла');
// // bookShelf.addBook('Страж снов');
// // console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// // bookShelf.removeBook('Мгла');
// // console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]

// // Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент
// // const bookShelf = {
// //   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
// //   updateBook(oldName, newName) {
// //     // Change code below this line
// //     for (const book of this.books) {
// //       if (book === oldName) {
// //         this.books.splice(this.books.indexOf(book), 1, newName);
// //       }
// //     }
// //   },
// // };
// // console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));
// // console.log(bookShelf.updateBook('The last kingdom', 'Dune'));

// // Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.
// // const atTheOldToad = {
// //   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
// //   addPotion(potionName) {
// //     this.potions.push(potionName);
// //   },
// // };
// // Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
// // const atTheOldToad = {
// //   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
// //   removePotion(potionName) {
// //     this.potions.splice(this.potions.indexOf(potionName), 1);
// //   },
// // };
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === potionName) {
//         potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };
