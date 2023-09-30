// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули




let arrUser = 'https://jsonplaceholder.typicode.com/users';
let divWraper =document.createElement('div');
let posrMainWrapTitle= document.createElement('div');
let posrMainTitle= document.createElement('p');




divWraper.classList.add('wraper');
document.body.appendChild(divWraper);
divWraper.appendChild(posrMainWrapTitle);
posrMainWrapTitle.appendChild(posrMainTitle);

posrMainWrapTitle.classList.add('posrMainWrapTitle');
posrMainTitle.classList.add('posrMainTitle');


posrMainTitle.innerText=`JSON Users`;

fetch(arrUser)
    .then(res => res.json())
    .then(users => {

        for (const user of users) {

            let divUser = document.createElement('div');
            let pUser = document.createElement('p');
            let butonDiv=document.createElement('button')

            divWraper.appendChild(divUser);
            divUser.appendChild(pUser);
            divUser.appendChild(butonDiv)

            divUser.classList.add('divUsers');

            pUser.innerHTML=`User № ${user.id} <br> ${user.name}`
            butonDiv.innerText='Details'
            butonDiv.onclick = () =>{
                location.href=`userDetails/user-details.html?id=`+JSON.stringify(user.id);

            }
        }
    })


