// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>text</div> `);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<p>${'text'} ${i}</p>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині
let i=0;
while (i<20){
    document.write(`<h1>task</h1>`);
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині
let j=0;
while (j<20){
    document.write(`<h1>${'text'} ${j} </h1>`)
    j++;
}
//- Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`);
    for (let k = 0; k < listOfItems.length; k++) {
        document.write(`<li>${listOfItems[k]}</li>`);
    }
document.write(`</ul>`);
//     Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
//     Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let k = 0; k < products.length; k++) {
    document.write(`<div class="product-title">
        <h3 class="product-title">${products[k].title}. Price - ${products[k].price}</h3>
        <img src="${products[k].image}" alt="" class="product-image"/></div>`);

}
// за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let k = 0; k < users.length; k++) {
    if (users[k].status) {
        document.write(`<div>${users[k].name}</div>`);
    }
}
    document.write(`<p>  </p>`);

    for (const user of users) {
        if (!user.status){
            console.log(user.status)
            document.write(`<div>${user.name}</div>`)
        }
    }
document.write(`<p>  </p>`);

    for (let k = 0; k < users.length; k++) {
        if (!users[k].status){
            document.write(`<div>${users[k].name}</div>`);
        }


}