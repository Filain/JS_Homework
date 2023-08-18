//----------- Масиви та об'єкти-----------------------------
//         1) Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = [0.55, -99, 1, 'panas', 'arkchupovuch', 'lorem', true, 25, 35, 0.17];

//         2) Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'TROKHY PITMY',
    pageCount: 258,
    genre: 'horor'
}
let book2 = {
    title: 'PRYHODY TOMA SOIIERA',
    pageCount: 320,
    genre: 'drama'
}
let book3 = {
    title: 'Black House',
    pageCount: 258,
    genre: 'drama'
}
//         3) Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Storm of the Century',
    pageCount: 328,
    genre: 'horor',
    authors: ['Stephen', 64]
}
let book5 = {
    title: 'Pet Sematary',
    pageCount: 665,
    genre: 'dyristika',
    authors: ['Till', 62]
}
let book6 = {
    title: 'Rose Red',
    pageCount: 175,
    genre: 'drama',
    authors: ['ariel', 36]
}
//         4) Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Volodymyr', username: 'Fil', password: 'qwerty'},
    {name: 'andrii', username: 'An270', password: 'oprst'},
    {name: 'Danylo', username: 'Dan7', password: 'asdas'},
    {name: 'Rostyk', username: 'Ros$', password: '*#55%'},
    {name: 'Yura', username: 'Y576', password: '1715'},
    {name: 'Alex', username: 'Maria_magdaluna', password: 'dfdf555'},
    {name: 'Ostap', username: 'Ostinpovers', password: 'Ostinpovers'},
    {name: 'Igor', username: 'Bandit', password: 'qhjgg552g'},
    {name: 'Anatolii', username: 'Bechketnyk', password: 'qwerty123'},
    {name: 'Max', username: 'M17', password: '123123'}
]
console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password, users[5].password, users[6].password, users[7].password, users[8].password, users[9].password);

//----------- Логічні розгалуження:-----------------------------
//  1) Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('1,0,-3');
let x = 5;
if (x === 0) {
    console.log('Невірно')
} else {
    console.log('Вірно')
}

//  2) Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//     (в першу, другу, третю или четверту частину години).

let time = 0;
if (time >= 0 && time < 15) {
    console.log('Перша чверть');
} else if (time >= 15 && time < 30) {
    console.log('Друга чверть');
} else if (time >= 30 && time < 45) {
    console.log('Третя чверть');
} else {
    console.log('Четверта чверть');
}

//  3) У змінній day дано якесь число від 1 до 31.
//  Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 2;
if (day < 10) {
    console.log('Перша');
} else if (day >= 10 && day < 20) {
    console.log('Друга');
} else {
    console.log('третя');
}

//  4) Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
//  і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let days = 6;

switch (days) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7 :
        console.log('sunday')
        break;
}


//  5) Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох.
//     Також потрібно врахувати коли введені рівні числа.
let a=25;
let b=25;

if (a >b) {
    console.log(a)
}
else if (a===b){
    console.log('equal');
}
else {
    console.log(b);
}

//  6) є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//  Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
//  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x1 = 2;
if (x1===0 || x1===undefined || x1===null){
    x1='default';
}
console.log(x1);


//  7) з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//  За допомоги іф перевірити кожен його елемент на тривалість навчання.
//  У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log('Супер');
}