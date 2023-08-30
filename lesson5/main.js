// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleArea = (a, b) => a * b;
console.log('Площа прямокутника: ' + rectangleArea(10, 15));
console.log('')
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (r) => 2 * 3.14 * r * r;
let circleRadius = circleArea(25);
console.log('Площа кола: ' + circleRadius);
console.log('');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (radius, height) => 2 * Math.PI * radius * height + 2 * Math.PI * radius * radius;
console.log('Площа циліндра: ' + cylinderArea(25, 15));
console.log('');
// - створити функцію яка приймає масив та виводить кожен його елемент

let arrPrint = (...x) => {
    console.log('Кожен елемент масиву рівний:');
    for (const x1 of x) {
        console.log(x1);
    }
}
let arr1 = [5, 25, 35, -25, 0.255, 'gfgfjdtjg', true];
arrPrint(arr1);

console.log('');

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragrafText = (text) => document.write(`<p>${text}</p>`);
paragrafText('Функція, яка створює параграф з текстом');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ul3li = (text) => {
    document.write(`<ul>`);
    document.write(`<li> ${text}</li>`);
    document.write(`<li> ${text}</li>`);
    document.write(`<li> ${text}</li>`);
    document.write(`</ul>`);
}
ul3li('Функція, яка створює ul з трьома елементами li')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulForLi = (text, number) => {
    document.write(`<ol>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li> ${text}</li>`);
    }
    document.write(`</ol>`);
}
ulForLi('Текст через аргумент. Кількість li визначається аргументом', 4)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

document.write(`Є питання: чому коли я викликаю функцію arrPrintLi (25, 265... ) аргументом є  (...arr), коли агрумент зробити (arr), то викликаю arrPrintLi(arrx), де arrx масив   `);
let arrPrintLi = (...arr) => {
    document.write(`<p>Список масиву примітивних чисел</p>`);
    document.write(`<ol>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
        console.log(arr[i]);
    }
    document.write(`</ol>`);
}

arrPrintLi (25, 265, 544, 666, 444, 'string', true);

// let arrx=[25, 265, 544, 666, 444, 'string', true];
// arrPrintLi(arrx);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrObjeckt=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>`);
        document.write(`<p>ID ${arr[i].id} </br>NAME ${arr[i].name} </br>AGE ${arr[i].age}</p>`);
        document.write(`</div>`);
    }

};

let simpsons = [
    {
        id: 1,
        name: 'Bart',
        age: 10,
    },
    {
        id: 2,
        name: 'Homer',
        age: 40,
    },
    {
        id: 3,
        name: 'Marge',
        age: 38,
    },
    {
        id: 4,
        name: 'Lisa',
        age: 9,
    },
    {
        id: 5,
        name: 'Maggie',
        age: 1,
    },
];
arrObjeckt(simpsons)

// - створити функцію яка повертає найменьше число з масиву
let arrmin=(arr)=>{
    let min=arr[0];
    for (const arrElement of arr) {
        if (min>arrElement){
            min=arrElement;
        }
    }
    document.write(`Найменьше число з масиву = `);
    document.write(min);
    document.write(`</br>`);
}
let arrForMin = [10, 2, 6, 3, 5];
arrmin(arrForMin);
document.write(`</br>`);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arrSum =(arr)=>{
    i=arr[0];
    for (const arrElement of arr) {
        i+=arrElement;
    }
    document.write(`Сума масиву = `);
    document.write(i);
    document.write(`</br>`);
}
let arrForSum = [1, 2, 3, 4, 5];
arrSum(arrForSum);
arrSum(arrForMin);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arrCange=(arr,index1,index2)=>{
    let temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;


    document.write(`<p>Масив після змін: ${arr}</p>`);
};
document.write(`<p>Масив до змін: ${arrForSum}</p>`);
arrCange(arrForSum,0,1)
document.write(`</br>`);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let Exchange=(sumUAH, currencyValues, exchangeCurrency)=> {

    let Value;

    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            Value = currencyValue.value;
            break;
        }
    }

    return sumUAH / Value;
}

let convertedSum = Exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {currency: 'PL', value: 8}], 'USD')
console.log('SUM='+convertedSum);
