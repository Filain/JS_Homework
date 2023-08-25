console.log('1 створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б');

function rectangleArea(length, width) {
    return length * width;
}

console.log('Площа прямокутника = ' + rectangleArea(35, 10));

console.log('');
console.log('2 створити функцію яка обчислює та повертає площу кола з радіусом r');

function circleArea(radius) {
    return 2 * 3.14 * radius * radius;
}

console.log('Площа кола = ' + circleArea(10));
console.log('');
console.log('3 створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r');

function cylinderArea(radius, height) {
    return 2 * 3.14 * radius * height + 2 * 3.14 * radius * radius;
}

let cylinder1 = cylinderArea(25, 15);
let cylinder2 = cylinderArea(25, 15);
console.log('Площа 1 циліндра = ' + cylinder1 + '        ' + 'Площа 1 циліндра = ' + cylinder2);

console.log('');
console.log('4 створити функцію яка приймає масив та виводить кожен його елемент');

function arrPrint(...x) {
    for (let x1 of x) {
        console.log(x1)
    }
}

let x4 = arrPrint(5, 25, 35, -25, 0.255, 'gfgfjdtjg', true);

console.log('');
console.log('5 створити функцію яка створює параграф з текстом. Текст задати через аргумент');

function task5(text) {
    document.write(`<p>${text}</p>  `);

}

let x5 = task5('dfdf');

console.log('');
console.log('6 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий');

function task6(text) {
    document.write(`<ul>`);
    document.write(`<li> ${text} </li>`);
    document.write(`<li> ${text} </li>`);
    document.write(`<li> ${text} </li>`);
    document.write(`</ul>`);
}

let x6 = task6('dfdfgggh');

console.log('');
console.log('7 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)');

function task7(text, number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
}

let x7 = task7('xxx', 25);

console.log('');
console.log('8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список');

function task8() {
    document.write(`<ul>`);
    for (const argument of arguments) {
        document.write(`<li> ${argument} </li>`);
    }
    document.write(`</ul>`);

}

let x8 = task8(25, 265, 544, 666, 666, 444, 'string', true);

console.log('');
console.log('9 створити функцію яка приймає масив обєктів з наступними полями id,name,age , та виводить їх в документ. Для кожного обєкту окремий блок.');
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

function task9(arr) {
    for (const arrElement of arr) {
        document.write(`<div>`);
        document.write(`<p>ID ${arrElement.id} </br>NAME ${arrElement.name} </br>AGE ${arrElement.age}</p>`);
        document.write(`</div>`);
    }
}

let x9 = task9(simpsons);
console.log('');
console.log('10 створити функцію яка повертає найменьше число з масиву');

function task10(arr) {
    let min = arr[0];
    for (const argument of arr) {
        if (min > argument) {
            min = argument;
        }
    }
    document.write(min);
}

let x10 = [10, 2, 1, 3, 5];
let x101 = task10(x10);

console.log('');
console.log('11 створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) ->13');
function task11(arr) {
    let sum=0;
    for (let arrElement of arr) {
        sum+=arrElement;
            }
    document.write(`</br>`);
    document.write(sum);

}

let x11=[10, 2, 1, 3, 5];
let x111=task11(x11);

console.log('');
console.log('12 створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах');
console.log('Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]');
function task12(arr,index1,index2) {
    let temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;

    document.write(`</br>`);
    document.write(arr);
}

let x12=[10, 2, 1, 3, 5];
let x121=task12(x12, 2, 1);

console.log('');
console.log('13 Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)');
console.log('Приклад exchange(10000,[{currency:USD,value:40},{currency:EUR,value:42}],USD) // => 250');

function Exchange(sumUAH, currencyValues, exchangeCurrency) {

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
console.log(convertedSum);



