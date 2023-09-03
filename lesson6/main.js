// 1) Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let task1_1 = 'hello world';
let task1_2 = 'lorem ipsum';
let task1_3 = 'javascript is cool';
console.log('Довжина ' + task1_1 + ' = ' + task1_1.length);
console.log('Довжина ' + task1_2 + ' = ' + task1_2.length);
console.log('Довжина ' + task1_3 + ' = ' + task1_3.length);
console.log(' ');
// 2) Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('В верхньому регістрі: ' + task1_1.toUpperCase());
console.log('В верхньому регістрі: ' + task1_2.toUpperCase());
console.log('В верхньому регістрі: ' + task1_3.toUpperCase());
console.log(' ');
// 3) Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let task3_1 = 'HELLO WORLD';
let task3_2 = 'LOREM IPSUM';
let task3_3 = 'JAVASCRIPT IS COOL';

console.log('В нижньому регістрі: ' + task3_1.toLowerCase());
console.log('В нижньому регістрі: ' + task3_2.toLowerCase());
console.log('В нижньому регістрі: ' + task3_3.toLowerCase());
console.log(' ');
// 4) Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let task4 = ' dirty string   ';

for (let i = 0; i < task4.length; i++) {
    // const task4Element = task4[i];
    if (task4.startsWith(' ')) {
        task4 = task4.substring(1, task4.length);
    } else if (task4.endsWith(' ')) {
        task4 = task4.substring(0, task4.length - 1);
    }
    else {
        break;
    }
}
console.log('Чиста стрінга: '+task4);
console.log(' ');


// 5) Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
    let str = 'Ревуть воли як ясла повні';
let stringToarray=str.split(' ');
console.log('масив з стрінги: ');
console.log(stringToarray);
console.log(' ');


// 6) є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let task6=[10,8,-7,55,987,-1011,0,1050,0];
let task6map=task6.map(value => {
    value=value.toString();
    return value;
})

console.log(task6map);
console.log(' ');

// 7) створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(nums, direction) {
    if (direction === 'ascending'){
    nums.sort((a, b) => a-b);
        console.log('За зростанням ');
        console.log(nums);
    }
      else if (direction === 'descending'){
        nums.sort((a, b) => b-a);
        console.log('За спаданням ');
        console.log(nums);
    }
    else{
        console.log('не вірні дані')
    }
}
sortNums(nums,'descending');
console.log(' ');

// 8) є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// 8.1) відсортувати його за спаданням за monthDuration
// 8.2) відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// 8.3) за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let task8_1 = coursesAndDurationArray.sort((a, b) =>{
    return a.monthDuration-b.monthDuration;
} )
console.log('Відсортувати масив за спаданням monthDuration');
console.log(task8_1);
console.log('');


console.log('Курси з тривалістю більше 5 місяців');
let task8_2 =coursesAndDurationArray.filter((value, index, array) => {
    return value.monthDuration>5;
})
console.log(task8_2);
console.log('');

console.log('Перетворення за допомогою map');
let task8_3=coursesAndDurationArray.map((value,index) =>{
    return{
    id: index+1,
        title: value.title,
        monthDuration: value.monthDuration
    }
} )
console.log(task8_3);
console.log('');


// 9)    описати колоду карт (від 6 до туза без джокерів)
// let desk = [
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},];


//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
const cardValues = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'];

function createDeck(cardSuits, cardValues) {
    let deck = [];
    for (const cardSuit of cardSuits) {
        for (const value of cardValues) {
            let color = (cardSuit === 'diamond' || cardSuit === 'heart') ? 'red' : 'black';
            deck.push({
                cardSuit: cardSuit,
                value: value,
                color: color
            });
        }
    }
    return deck;
}

const deck = createDeck(cardSuits, cardValues);
console.log(deck);
console.log('')
// 9.1) знайти піковий туз

let peakAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(peakAce);
console.log('')
// 9.2) всі шістки

let six = deck.filter(value => value.value === '6');
console.log(six);
console.log('')

// 9.3) всі червоні карти
let red = deck.filter(value => value.color=== 'red');
console.log(red);
console.log('')
// 9.4) всі буби
let diamond=deck.filter(value => value.cardSuit === 'diamond')
console.log(diamond);
console.log('')


// 9.5) всі трефи від 9 та більше
let clubs=deck.filter(value => value.cardSuit==='clubs'&&(value.value === '9' || value.value === '10' || value.value === 'jack' || value.value === 'queen' || value.value === 'king' || value.value === 'joker'));
console.log(clubs);
console.log('')


// 10)    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let pocke = deck.reduce((acum, card) => {
    if (card.cardSuit === 'diamond') {
        acum.diamonds.push(card)
    } else if (card.cardSuit === 'heart') {
        acum.hearts.push(card)
    } else if (card.cardSuit === 'clubs') {
        acum.clubs.push(card)
    } else if (card.cardSuit === 'spade') {
        acum.spades.push(card)
    }
    return acum;
}, {spades: [], diamonds: [], hearts: [], clubs: []})
console.log(pocke);

// 11) взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// 11.1) написати пошук всіх об'єктів, в який в modules є sass
let sas = coursesArray.filter(value =>value.modules.includes('sass') )
console.log(sas);
// 11.2) написати пошук всіх об'єктів, в який в modules є docker
console.log('');

console.log('docker');

let docker = coursesArray.filter(value =>value.modules.includes('docker') )
console.log(docker);