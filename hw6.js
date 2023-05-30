//Задача 1
// const arrNumbers = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < arrNumbers.length; i++) {
//     const currentElement = arrNumbers[i];
//     console.log(currentElement);

//     if (currentElement === 10) {
//         break;
//     }
// }

// Задача 2
// const arrNumbers = [1, 5, 4, 10, 0, 3];
// let position = 0;

// arrNumbers.forEach((item, index) => {
//     if (item == 4 ) {
//         position = index;
//     }
// });
// console.log(position);

// Задача 3
// const numberArr = [1, 3, 5, 10, 20];
// const newNumberArr = numberArr.join(' ');
// console.log(newNumberArr);

//Задача 4
// const arr = [];

// for (let n = 0; n < 3; n++) {
//     arr[n] = [];
//     for (let m = 0; m < 3; m++) {
//         arr[n][m] = 1;
//     }
// }
// console.log(arr);

//Задача 5
// const arr = [1, 1, 1];
// const newArr = arr.concat(2, 2, 2);
// console.log(newArr);


//Задача 6
// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort().pop();

// console.log(arr);


//Задача 7
// const arr = [9, 8, 7, 6, 5];

// let userNumber = +(prompt('Введите число от 1 до 10'));

// if (arr.includes(userNumber)) {
//     alert('Такое число есть!')
// } else {
//     alert('Такого числа нет! Попробуй еще раз!')
// }

//Задача 8
// let firstLetters = 'abcdef';

// const firstLettersArr = firstLetters.split('').reverse().join('');

// console.log(firstLettersArr);

//Задача 9
// const numericalArr = [
//     [1, 2, 3,],
//     [4, 5, 6]
// ]

// const numberArrNew = numericalArr[0].concat(numericalArr[1]);
// console.log(numberArrNew);

//Задача 10
// const arr = [2, 4, 6, 8, 10];

// for (let b = 0; b < arr.length; b++) {
//     arr[5] = '';
//     console.log(`${arr[b]}: ${arr[b] + arr[b+1]}`);
// }

//Задача 11
// const integerNumbers = [12, 15, 20, 55];

// const squareNumbers = integerNumbers.map(item => item**2);
// console.log(squareNumbers);

//Задача 12
// const words = ['Skypro', 'дополнительное образование', '', 'карта'];

// const getWordsLength = words.map(element => element.length);

// console.log(getWordsLength);

//Задача 13
// function filterPositive(array) {
//     let result = array.filter(el => el < 0);
//     console.log(result);
// }
// filterPositive([-1, 0, 5, -10, 56]);
// filterPositive([-25, 25, 0, -1000, -2]);

//Задача 14
// const randomArray = [];

// for (let i = 0; i < 10; i++) {
//     const randomValue = Math.floor(Math.random() * 11);
//     randomArray.push(randomValue);    
// }
// console.log(randomArray);

// const filterArray = randomArray.filter(item => item % 2 ===0);
// console.log(filterArray);

//Задача 15
// const randomNumbers = [];

// for (let n = 0; n < 6; n++) {
//     const randomValue = Math.floor(Math.random()*11);
//     randomNumbers.push(randomValue);    
// }
// console.log(randomNumbers);

// const reduceArr = randomNumbers.reduce((a,b) => (a + b)) / randomNumbers.length;
// console.log(`Среднее арифметическое цифр в массиве равняется ${reduceArr}`);