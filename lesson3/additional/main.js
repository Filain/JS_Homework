// --створити масив з:
// - з 5 числових значень
let arr1=[1,25,0.22,-6,0]
// - з 5 стічкових значень
let arr2=['string1','string2','string3','string4','string5',]
// - з 5 значень стрічкового, числового та булевого типу
let arr3 =['string',25, true]
// - та вивести його в консоль
console.log(arr3)
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4=[];
arr4[0]=5;
arr4[1]=0.25;
arr4[2]='string';
arr4[3]=true;

console.log(arr4)

console.log('- є масив [2,17,13,6,22,31,45,66,100,-18]');

let arr5=[2,17,13,6,22,31,45,66,100,-18];
console.log('// 1. перебрати його циклом while');
let i1=0;
while (i1<arr5.length){
    console.log(arr5[i1])
    i1++;
}

console.log('*****************************');
console.log('// 2. перебрати його циклом for');
for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
}

console.log('*****************************');

console.log('// 3. перебрати циклом while та вивести  числа тільки з непарним індексом');
let i3=0;
while (i3<arr5.length){
    if (i3%2>0){
    console.log(arr5[i3]);
    }
    i3++;
}

console.log('*****************************');

console.log('// 4. перебрати циклом for та вивести  числа тільки з непарним індексом');
for (let i = 0; i < arr5.length; i++) {
    if (i%2>0){
    console.log(arr5[i]);
    }
}
console.log('*****************************');
console.log('// 5. перебрати циклом while та вивести  числа тільки парні  значення');
let i5=0;
while (i5<arr5.length){
    if(arr5[i5]%2===0){
        console.log(arr5[i5])
    }
    i5++;
}
console.log('*****************************');
console.log('// 6. перебрати циклом for та вивести  числа тільки парні  значення');
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i]%2===0){
     console.log(arr5[i]);
    }
}
console.log('*****************************');
console.log(' 7. замінити кожне число кратне 3 на слово "okten"');
let arr5i=[2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < arr5i.length; i++) {
    if (arr5i[i]%3===0){
        arr5i[i]='okten';
    }
console.log(arr5i[i]);
}

console.log('*****************************');
console.log('8. вивести масив в зворотньому порядку');
for (let i = arr5.length-1; i >= 0 ; i--) {
    console.log(arr5[i]);

}
console.log('*****************************');
console.log('9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)');
console.log('9.1 перебрати його циклом while');
let i18 =arr5.length-1;
while (i18>=0){
 console.log(arr5[i18]);
    i18--;
}
console.log('9.2. перебрати його циклом for');
for (let i = arr5.length - 1; i >= 0; i--) {
console.log(arr5[i]);
}
console.log('9.3. перебрати циклом while та вивести  числа тільки з непарним індексом');

let i93= arr5.length-1;
while (i93>=0){
if(i93%2>0){
    console.log(arr5[i93]);
}
    i93--;
}
console.log('9.4. перебрати циклом for та вивести  числа тільки з непарним індексом');
for (let i = arr5.length - 1; i >= 0; i--) {
    if (i%2>0){
        console.log(arr5[i])
    }
}
console.log('9.5. перебрати циклом while та вивести  числа тільки парні  значення');
let i95 =arr5.length-1;
while (i95>=0){
    if (arr5[i95]%2===0){
        console.log(arr5[i95])
        }
    i95--;
}

console.log('9.6. перебрати циклом for та вивести  числа тільки парні  значення');
for (let i =arr5.length-1; i >=0; i--){
    if (arr5[i]%2===0){
        console.log(arr5[i])
    }
}
console.log('9.7. замінити кожне число кратне 3 на слово "okten"');
let arr97=[2,17,13,6,22,31,45,66,100,-18];
for (i=arr97.length-1; i>=0; i--){
    if(arr97[i]%3===0){
        console.log(arr97[i]);
    }
}
console.log('*****************************');

console.log('- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі');
let arr100 =[0,1,2,3,4,5,6,7,8,9];
for (let i = 0; i < arr100.length; i++) {
    console.log(arr100[i]);
}
console.log('- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі');
let arr101=['string1','string2','string3','string4','string5','string6','string7','string8','string9','string10'];
for (let i = 0; i < arr101.length; i++) {
    console.log(arr101[i]);
}
console.log('- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі');
let arr102=[1010,-25,0.22,'str','fgfdgf',false, true];
for (let i=0;i<arr102.length;i++){
    console.log(arr102[i])
}
console.log('- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи');
let arr103=[1010,-25,0.22,'str','fgfdgf',false, true];
for (let i =0;i<arr103.length;i++){
    if(typeof arr103[i]==='boolean'){
        console.log(arr103[i])
    }
}
console.log('- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи');
let arr104=[1010,-25,0.22,'str','fgfdgf',false, true];
for (let i =0; i<arr104.length;i++){
    if (typeof arr104[i]==='number'){
        console.log(arr104[i])
    }
}
console.log('- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи');
let arr105=[1010,-25,0.22,'str','fgfdgf',false, true];
for(let i =0;i<arr105.length;i++){
    if (typeof arr105[i]==='string'){
        console.log(arr105[i])
    }
}
console.log('- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.');
let arr107=[];
arr107[0]=10;
arr107[1]=-50;
arr107[2]=0.110;
arr107[3]=-0.22;
arr107[4]='ssssddd';
arr107[5]='asgfg';
arr107[6]=true;
arr107[7]=false;
arr107[8]='dddsgfg';
arr107[9]=25314552;
for (let i = 0; i<arr107.length; i++){
    console.log(arr107[i]);
}

console.log('- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
for (let i = 0; i < 10; i++) {
    console.log()
    ;

}
console.log('- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
for (let i=0;i<100;i++){
    console.log(i);
    document.write(`${' '} ${i}`);
}
document.write(`<br><br>`);

console.log('- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write');
for (let i=0;i<100;i+=2){
    console.log(i);
    document.write(`${' '} ${i}`);
}
document.write(`<br><br>`);
console.log('- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write');
for (let i=0;i<100;i++){
    if (i%2===0 && i!==0) {
        console.log(i);
        document.write(` ${i}`);
    }
}
document.write(`<br><br>`);

console.log('- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write');
for (let i=0;i<100;i++){
    if (i%2>0) {
        console.log(i);
        document.write(`${' '} ${i}`);
    }
}
document.write(`<br><br>`);
console.log('стоврити масив книжок (назва, кількість сторінок, автори , жанри).');
let books = [
    {name:'sdhgsdsdf', pages: 256, autor: 'djadghjuoja',janra:'ded'},
    {name:'sgsdsdf', pages: 256, autor: 'djdfdfadja',janra:'jaga'},
    {name:'sdfdfddfsdsdf', pages: 1715, autor: 'djadja',janra:'ded'},
    {name:'sdhgsddf', pages: 1000, autor: 'djadjcvcva',janra:'agag'},
    {name:'sdhgsdfdfdf', pages: 25, autor: 'djadjsssda',janra:'ded'},
    {name:'sdhgsyuhruiokdsdf', pages: 12, autor: 'djfffadja',janra:'ded'}
]
console.log('-знайти наібльшу книжку.');

console.log('- знайти книжку/ки з найбільшою кількістю жанрів');
console.log('- знайти книжку/ки з найдовшою назвою');
console.log('- знайти книжку/ки які писали 2 автори');
console.log('- знайти книжку/ки які писав 1 автор');