// Задание 1
// function calc(a, b) {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// console.log(`Меньшее из двух чисел ${calc(4, 8)}`);

// Задание 2
// let typeNumber = function () {
//     let userNumber = Number(prompt('Введите любое число'));

//     if (userNumber % 2 === 0) {
//         return 'Число чётное';
//     } else {
//         return 'Число нечётное';
//     }
// }

// alert(typeNumber());

// Задание 3.1
// let squareNumber = (n) => Math.pow(n, 2);

// console.log(squareNumber(75));

// Задание 3.2
// let squareNumber = (n) => {
//     let result = Math.pow(n, 2);
//     return result;
// }

// console.log(squareNumber(20));

// Задание 4
// function userAge(userAnswer = Number(prompt('Сколько Вам лет?'))) {
    
//     if (userAnswer < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (userAnswer >= 0 && userAnswer <= 12) {
//         alert('Привет, друг!');
//     } else {
//         alert('Добро пожаловать!')
//     }
// }

// userAge();

// Задание 5
// let correctNumbers = (a, b) => {
    
//    if (isNaN(a) || isNaN(b)) {
//     return 'Одно или оба значения не являются числом!'
//    } else {
//     return a * b;
//    }
// }

// console.log(correctNumbers('sky', 10));

// Задание 6
// function squareNumber() {
//     let userNumber = prompt('Напишите любое число');
//     let userNumberSquare = Math.pow(userNumber, 2); 

//     if (!isNaN(userNumber)) {
//         return `${userNumber} в кубе равняется ${userNumberSquare}`;
//     } else {
//         return 'Переданный параметр не является числом';
//     }
// }

// alert(squareNumber());

// Задание 7
// function getArea() {
//     return 3.14 * (this.radius**2);
// }

// function getPerimeter() {
//     return 2 * 3.14 * this.radius;
// }

//  const circle1 = {
//     radius: 65,
//     getArea: getArea,
//     getPerimeter: getPerimeter
//  }

//  const circle2 = {
//     radius: 12,
//     getArea: getArea,
//     getPerimeter: getPerimeter
//  }

//  console.log(`Площадь окружности №1 равна ${circle1.getArea()}`);
//  console.log(`Площадь окружности №2 равна ${circle2.getArea()}`);
//  console.log(`Периметр окружности №1 равен ${circle1.getPerimeter()}`);
//  console.log(`Периметр окружности №2 равен ${circle2.getPerimeter()}`);

// Задание 8
let monthNumber = () => {
    userAnswer = Number(prompt("Введите номер месяца"));

    if (userAnswer === 1 || userAnswer === 2 || userAnswer === 12) {
        return "Зима";
    } else if(userAnswer === 3 || userAnswer === 4 || userAnswer === 5) {
        return "Весна";
    } else if (userAnswer === 6 || userAnswer === 7 || userAnswer === 8) {
        return "Лето";
    } else if (userAnswer === 9 || userAnswer === 10 || userAnswer === 11) {
        return "Осень";
    } else {
        return "Такого месяца нет! Попробуй еще раз."
    }
}