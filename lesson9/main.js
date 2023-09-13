// - створити блок,
let div1 = document.createElement('div');
document.body.append(div1)

// - додати йому класи wrap, collapse, alpha, beta
div1.classList.add('wrap');
div1.classList.add('collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div1.style.backgroundColor = 'red';
div1.style.color = 'blue';
div1.style.fontSize = '20px';


// - додати цей блок в body.
document.body.append(div1);
// - клонувати його повністю, та додати клон в body.
document.body.append(div1.cloneNode(true));
//
// - Є масив: ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arr1 = ['Main', 'Products', 'About us', 'Contacts'];
let divArr1 = document.createElement('div');
let ulArr1 = document.createElement('ul');
document.body.append(divArr1);
divArr1.appendChild(ulArr1);
for (const arr1n of arr1) {
    let liArr1 = document.createElement('li');
    liArr1.innerText = ` ${arr1}`
    ulArr1.appendChild(liArr1);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div2 = document.createElement('div');
    document.body.append(div2);
    let parText = document.createElement('p');
    parText.innerText = `title: ${coursesAndDurationArrayElement.title},  monthDuration: ${coursesAndDurationArrayElement.monthDuration}`
    div2.appendChild(parText);
}

// =========================
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div3 = document.createElement('div');
    div3.classList.add('item');
    document.body.append(div3);
    let head = document.createElement('h1');
    head.classList.add('heading');
    head.innerText = `${coursesAndDurationArrayElement.title}`;
    div3.appendChild(head);

    let parText = document.createElement('p');
    parText.classList.add('description');
    div3.appendChild(parText);
    parText.innerText = `Duration: ${coursesAndDurationArrayElement.monthDuration} month;`
}

// ==========================
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

let div4 = document.createElement('div');
div4.classList.add('maines');
document.body.append(div4);

for (const simpson of simpsons) {
    let div41 = document.createElement('div');
    div41.classList.add('member');
    // document.body.append(div41);
    div4.appendChild(div41);

    let paragText = document.createElement('p');
    paragText.innerHTML = `name: ${simpson.name} <br> surname: ${simpson.surname} <br> age: ${simpson.age} <br> info: ${simpson.info}`;
    div41.appendChild(paragText);

    let img = document.createElement('img');
    img.src = simpson.photo;
    img.alt = `${simpson.name} ${simpson.surname}`;
    div41.appendChild(img);
}


// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

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

// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
div5 = document.createElement('div');
div5.classList.add('wrap');
document.body.append(div5);
for (const coursesArrayElement of coursesArray) {
    let divElement = document.createElement('div');
    divElement.classList.add('element');
    div5.appendChild(divElement);


    let divTitle = document.createElement('div');
    divTitle.classList.add('elementTitle','title');
    divElement.appendChild(divTitle);

    let pTitle = document.createElement('h2');
    divTitle.appendChild(pTitle);
    pTitle.innerText = `${coursesArrayElement.title}`

    // -----------------------------------
    let divDuration = document.createElement('div');
    divDuration.classList.add('elementTitle');
    divElement.appendChild(divDuration);

    let divDurationMonth = document.createElement('div');
    divDurationMonth.classList.add('elementDurationMonth');
    divDuration.appendChild(divDurationMonth);

    let pDurationMonth = document.createElement('p');
    divDurationMonth.appendChild(pDurationMonth);
    pDurationMonth.innerText = `MonthDuration: ${coursesArrayElement.monthDuration} month;`

    let divDurationmHour = document.createElement('div');
    divDurationmHour.classList.add('elementDurationHour');
    divDuration.appendChild(divDurationmHour);
    //

    let pDurationHour = document.createElement('p');
    divDurationmHour.appendChild(pDurationHour);
    pDurationHour.innerText = `HourDuration: ${coursesArrayElement.hourDuration} hour;`


    //------------------------------------------------

    let divModules = document.createElement('div');
    divModules.classList.add('elementTitle','work');
    divElement.appendChild(divModules);

    let ab = coursesArrayElement.modules
    for (const divModule of ab) {
        let pModulesElement=document.createElement('p');
        divModules.appendChild(pModulesElement);
        pModulesElement.innerText=`${divModule} `;
    }






    // for (const modulesElementElement of modulesElement) {
    //     pModulesElement.innerText+=`${modulesElementElement} `
    //
    // }







}


// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------