// function calculateTotalPrice(order) {
// 	let total = 0;
// 	// Change code below this line
// 	for (let i = 0; i < order.length; i += 1) {
// 		total += order[i];
// 	}
// }
//   // Change code above this line
//   return total;
// calculateTotalPrice([12, 85, 37, 4]);

// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');
// findLongestWord();

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     // numbers = [i];
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());

// function filterArray(numbers, value) {
//   // Change code below this line
//   const array = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//     }
//   }
//   // Change code above this line
//   return array;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   const hasFruit = fruits.includes(fruit);
//   if (hasFruit) {
//     return true;
//   }
//   return false; // Change this line
// }
// console.log(checkFruit('plum'));
// console.log(checkFruit('mandarin'));
// console.log(checkFruit('pear'));
// console.log(checkFruit('Pear'));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     const element = array1[i];
//     const hasElement = array2.includes(element);
//     if (hasElement) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let orders of order) {
//     total += orders;
// 	}

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   return total;
//   // Change code above this line
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

// const planets = ['Earth', 'Mars', 'Venus'];
// const planet = 0;
// for (const planet of planets) {
//   console.log(planet);
// }

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));

// сумма четных чисел
// const numbers = [2, 7, 9, 23, 76, 4, 21];
// let total = 0;
// // for (let i = 0; i <= numbers.length; i += 1) {
// // 	number = numbers[i];
// //   console.log(numbers[i]);
// //   if (numbers[i] % 2 === 0) {
// //     console.log('Четное');
// //     total += numbers[i];
// //   }
// // }
// // console.log(total);

// или

// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 === 0) {
//     console.log('Четное');
//     total += number;
//   }
// }
// console.log(total);

// массив четніх чисел от start >> end

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const EvenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       EvenNumbers.push(i);
//     }
//   }
//   return EvenNumbers;

//   // Change code above this line
// }

// записать первое число от старт до енд которое делится без остатка на 5
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   // Change code above this line
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// function includes(array, value) {
//   // Change code below this line
//   array = [];
//   for (let i = 0; i <= array.length; i += 1) {
//     return (array = [i]);
//     if ([i] === value) {
//       return true;
//     } else if ([i] !== value) {
//       return false;
//     }
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
