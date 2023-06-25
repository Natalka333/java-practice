// ОБЬЕКТЫ - ОБРАЩЕНИЕ
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
// };
//  обращение через точку

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// console.log(book.title);

// const location = book.location;
// console.log(location);
// const country = book.location.country;
// console.log(country);

// const genres = book.genres;
// console.log(genres);
// const firstGenres = genres;
// console.log(firstGenres[0]);
// console.log(genres.length);

//  обращение через [] скобки
// const bookTitle = book['title'];
// console.log(bookTitle);
// const bookGenres = book['genres'];
// console.log(bookGenres);

// изменение значения свойств
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
// };
// book.rating = 9;
// book.genres.push('drama');
// book.author = 'jonh';
// console.log(book.rating);
// console.log(book.genres);
// console.log(book.author);

// добавление значения свойств

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']

// МЕТОДЫ ОБЬЕКТА

// const bookShelf = {
//   books: ['Garry Potter', 'Master and Margo'],

//   getBook() {
//     console.log('Воозвращает все книги');
//   },
//   addBooks() {
//     console.log('Добавляет книги');
//   },
// };
// bookShelf.getBook();
// bookShelf.addBooks('new book');

// ДОСТУП К СВОЙСТВАМ ОБЬЕКТА МЕТОДАХ --ОБРАЩАЕМСЯ ЧЕРЕЗ THIS!
// const phoneShop = {
//   phones: ['samsung', 'nokia'],
//   getPhones() {
//     return this.phones;
//   },
//   addPhones(phoneNew) {
//     this.phones.push(phoneNew);
//   },
//   removePhones(phoneNew) {
//     const phoneIndex = this.phones.indexOf(phoneNew);
//     this.phones.splice(phoneIndex, 1);
//   },
// };

// console.log(phoneShop.getPhones());
// phoneShop.addPhones('xsiomi');
// phoneShop.addPhones('aifon');
// console.log(phoneShop.getPhones());
// phoneShop.removePhones('aifon');
// console.log(phoneShop.getPhones());

// ПЕРЕБОР ОБЬЕКТА  for....in
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// const shops = {
//   phones: ['samsung', 'xiomi', 'nokia'],
//   model: ['x1', 'x2', 'x3'],
//   year: 2022,
// };
// for (const key in shops) {
//   console.log(key);
//   console.log(shops[key]);
// };

//Метод Object.create(shops) создаёт и возвращает новый объект, связывая его с объектом shops. Поэтому можно получить значение свойства year обратившись к нему как autor.year, хотя его нет в объекте autor - это несобственное свойство из объекта shops.
// const autor = Object.create(shops);
// autor.name = 'bernard';
// console.log(autor);
// console.log(autor.name);
// console.log(autor.year);
// Поэтому при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство. Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем.
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }
// console.log(book.hasOwnProperty('author'));
// console.log(book.hasOwnProperty('name'));

// ПЕРЕБОР FOR..OF с помощью Object.keys() and Object.values()

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// for (const key of keys) {
//   // console.log(book);
//   // console.log(key);
//   console.log(book[key]);
// }

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };
// const values = Object.values(goods);
// let total = 0;
// for (const value of values) {
//   total += value;
// }
// console.log(values);
// console.log(total);

// Метод Object.entries()
// Метод Object.entries(obj) возвращает массив записей, каждым элементом которого будет еще один массив из 2-х элементов: имени свойства и значения этого свойства из объекта obj.

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// ДЕСТРУКТУРИЗАЦИЯ ОБЬЕКТОВ
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? 'публичном' : 'закрытом';
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// console.log(message);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
// };
// const { title, author, genres, isPublic, rating = 9 } = book;
// console.log(rating);

// const apartment = {
//   tags: ['premium', 'promoted', 'top'],
//   price: 2153,
//   rating: 4,
//   descr: 'Spacious apartment in the city center',
//   imgUrl: 'https://via.placeholder.com/640x480',
// };
// console.log(apartment);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// console.log(apartment);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// ИЗМЕНИТЬ ЗНАЧЕНИЕ В ЗАДАННЫХ ПАРАМЕТРАХ
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);

// ДОБАВЛЕНИЕ НОВЫХ СВОЙСТВ ОБЬЕКТУ
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Jamaica', city: 'Kingston' };

// console.log(apartment.rooms);
// console.log(apartment.location.country);
// console.log(apartment.location.city);

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
// console.log(product);

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   // console.log(book[key]);
// }

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = ['descr', 'rating', 'price'];
// const values = ['Spacious apartment in the city center', 4, 2153];

// for (const keys in values) {
// }

// console.log(keys);
// console.log(values);

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log(keys);
// console.log(apartment);

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]

// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']

// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// //  Object.keys(obj)--принимает обьект и возвращает массив ключей егособственных св-в
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
// // Change code above this line

// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
// 	return propCount;
// }
//  ИЛИ ВТОРОЙ МЕТОД
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// const keys = Object.keys(object);

//   for (const key of keys) {
//       propCount += 1;
//   };

//   return propCount;
//   // Change code above this line
// };

// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// const temps = [14, -4, 25, 8, 11];

// В консоли будет массив
// console.log(temps);
// ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// В консоли будет набор отдельных чисел
// console.log(...temps);
// ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

// СОЗДАЕМ КОПИЮ
// const temps = [14, -4, 25, 8, 11];

// // Это точная, но независимая копия массива temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// РАСПЫЛЯЕМ ДВА МАССИВА В ОДИН ЦЕЛЫЙ

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
// ];
// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const user = {
//   name: 'Nataly',
//   age: 44,
//   pol: 'woman',
//   hobbies: ['swiming', 'reding', 'embroid'],
//   adress: {
//     country: 'Ukraine',
//     toun: 'Kharkiv',
//   },
// };

// const userName = user.name;
// console.log(userName);

// const userAdress = user.adress.toun;
// console.log(userAdress);

// const userHobbies = user.hobbies;
// console.log(userHobbies);
// const numberUserHobbies = userHobbies.length;
// console.log(numberUserHobbies);

// user.hobbies.push('riding');
// console.log(userHobbies);

// // ПЕРЕБОР ОБЬЕКТА С ПОМОЩЬЮ  for..in
// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

//  и перебор с помощью for..of

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(key);
//   console.log(user[key]);
// }

// const values = Object.values(user);
// console.log(values);

// const entries = Object.entries(user);
// console.log(entries);

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

//СОЗДАНИЕ НОВОГО МАССИВА

// const number = [2, 5, 7, 9];
// const newNumber = [11, 45, 56, 92];
// const sumNumber = [...number, ...newNumber];
// console.log(sumNumber);

// СОЗДАНИЕ НОВОГО ОБЬЕКТА
// const user = { name: 'nataly', pol: 'woman', age: 44 };
// const friend = { name: 'luda', pol: 'woman', age: 45 };
// const friendlys = { ...user, ...friend };
// console.log(friendlys);     {name: 'luda', pol: 'woman', age: 45}
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined
// const accessType = book.isPublic ? 'публичном' : 'закрытом';
// const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;
// console.log(message);

// РЕСТРУКТУРИЗАЦИЯ МАССИВА
// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// const {
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;
