/* Задание 1
let password = 'qwerty';
let userPassord = prompt('Введите пароль');

if (userPassord === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}
*/

/*Задание 1 (второй вариант)
let password = 'qwerty';
let userPassord = prompt('Введите пароль');

userPassord === password ? alert('Пароль введен верно') : alert('Пароль введен неправильно');
*/

/* Задание 2
let c = 50;

if (c>0 && c<10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
*/

/*Задание 2 (второй вариант)
let c = 10;
c>0 && c<10 ? console.log('Верно') : console.log('Неверно');
*/

/*Задание 3
let d = 3;
let e = 105;

(d>100 || e>100) ? console.log('Верно') : console.log('Неверно');
*/

/* Задание 4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));
*/

/* Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 1 :
        alert('Зима');
        break;
    case 2 :
        alert('Зима');
        break;
    case 12 :
        alert('Зима');
        break;
    case 3 :
        alert('Весна');
        break;
    case 4 :
        alert('Весна');
        break;
    case 5 :
        alert('Весна');
        break;
    case 6 :
        alert('Лето');
        break;
    case 7 :
        alert('Лето');
        break;
    case 8 :
        alert('Лето');
        break;
    case 9 :
        alert('Осень');
        break;
    case 10 :
        alert('Осень');
        break;
    case 11 :
        alert('Осень');
        break;            
    default:
        alert('Нет такого месяца');
        break;
}
*/
// Задание 5 (второй вариант)
// let monthNumber = Number(prompt('Введите номер месяца'));

// switch (monthNumber) {
// 	case 1:
// 	case 2:
// 	case 12:
// 		console.log('winter');
// 		break;
// 	case 3:
// 	case 4:
// 	case 5:
// 		console.log('spring');
// 		break;
// 	case 6:
// 	case 7:
// 	case 8:
// 		console.log('summer');
// 		break;
// 	case 9:
// 	case 10:
// 	case 11:
// 		console.log('autumn');
// 		break;
// 	default:
// 		console.log('Такого месяца не существует');
// 		break;
// }

/* Задание 7
let anyNumber = prompt('Пожалуйста, введите любое число');

console.log(Number(anyNumber));
console.log(anyNumber % 2 == 0);

if (anyNumber % 2 == 0) {
    alert('Число чётное');
} else if(anyNumber % 2 == 1) {
    alert('Число нечётное');
} else {
    alert('Вы ввели не число');
}
*/

/* Задание 8
let clientOS = Number(prompt('Введите 1, если используете Android или введите 2, если используете iOS'));

clientOS === 1 ? console.log('Установите версию приложения для Android по ссылке') : console.log('Установите версию приложения для iOS по ссылке');
*/

/* Задание 9
let clientOS = Number(prompt('Введите 1, если используете Android или введите 2, если используете iOS'));

let clientDeviceYear = Number(prompt('Введите год создания телефона'))

if (clientOS === 1 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS === 2 && clientDeviceYear >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else if (clientOS === 2 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
}else {
    console.log('Вы ввели неверные значения');
}
*/