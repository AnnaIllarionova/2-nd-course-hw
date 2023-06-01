// Задание 1
// let sentence = 'Тополиный пух везде!';

// console.log(sentence.toUpperCase());

//Задание2
// const searchStart = (arr, word) => {
//     const newArr = [];
//     arr.forEach((el) => {
//         if (el.toLowerCase().startsWith(word.toLowerCase())) {
//             newArr.push(el);
//         }
//     });
//     console.log(newArr);
// }

// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
// searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');


//Задание 3
// let userNumber = 32.58884;

// let floorNumber = Math.floor(userNumber);
// console.log(`Округление до меньшего целого - ${floorNumber}`);

// let ceilNumber = Math.ceil(userNumber);
// console.log(`Округление до большего целого - ${ceilNumber}`);

// let roundNumber = Math.round(userNumber);
// console.log(`Округление до ближайшего целого - ${roundNumber}`);


//Задание 4
// maxNumber = Math.max(52, 53, 49, 77, 21, 32);
// minNumber = Math.min(52, 53, 49, 77, 21, 32);
// console.log(`Максимальное число - ${maxNumber}, минимальное число - ${minNumber}`);


//Задача 5
// function getRandomNumber(minValue, maxValue) {
//     return Math.round(Math.random()*(maxValue - minValue) + minValue)
// }

// console.log(getRandomNumber(1, 10));

//Задача 6
// function getRandomArr(maxValue) {
//     const randomArr = [];
//     for (let i = 0; i < (Math.floor(maxValue/2)); i++) {
//         let randomValue = Math.round(Math.random()*(maxValue));
//         randomArr.push(randomValue);
//     }
//     console.log(randomArr);
// } 

// getRandomArr(7);
// getRandomArr(10);
// getRandomArr(18);

//Задание 7
// function getRandomNumber(minValue, maxValue) {
//     if (minValue === Math.round(minValue) & maxValue === Math.round(maxValue)) {
//         return Math.round(Math.random()*(maxValue - minValue) + minValue);
//     } else {
//         console.log('Введено не целое число');
//     }
// }

// console.log(getRandomNumber(19, 25));

//Задание 8
// let currentDate = new Date();
// console.log(currentDate);

//Задание 9
// let currentDate = new Date();
// currentDate.setDate(73);

// console.log(currentDate);

//Задание 10
// let myDay = new Date(2023, 9, 20, 11, 11, 11);

// const options = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
// }

// console.log('Дата: ' + myDay.toLocaleDateString('ru-RU', options) + ' - это ' + myDay.toLocaleDateString('ru-RU', {weekday: 'long'}) + '\n' +  'Время: ' + myDay.toLocaleTimeString('ru-RU'));


//Задание 11
function rememberWords() {
    let fruitsArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    confirm(`Запомните слова:\n ${fruitsArr}`);

    let sortFruitsArr = fruitsArr.slice().sort(() => Math.random() - 0.5);
    confirm(`А теперь перемешаем слова:\n ${sortFruitsArr}`);

    let userFirstWord = prompt('Чему равнялся первый элемент массива?');
    let userSecondWord = prompt('Чему равнялся последний элемент массива?');

    if (userFirstWord.toLowerCase() === fruitsArr[0].toLowerCase() && userSecondWord.toLowerCase() === fruitsArr[fruitsArr.length - 1].toLowerCase()) {
        alert('Поздравляю! У тебя хорошая память!');
    } else if (userFirstWord.toLowerCase() === fruitsArr[0].toLowerCase() || userSecondWord.toLowerCase() === fruitsArr[fruitsArr.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Оба варианта неверны(((');
    }
}


