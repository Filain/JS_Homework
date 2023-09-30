// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули


// + 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)


// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.


// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/посилвння розташувати
// під інформацією про user.

//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .

//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так,
//     щоб було видно що це блоки (дати фон. марджини і тд)

let url = new URL(location.href);
let dat = url.searchParams.get('id');
let userID = JSON.parse(dat);
console.log('userID =' + userID);
fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(res => res.json())
    .then(user => {
        console.log(user)
        let userDiv = document.createElement('div');
        let userUl = document.createElement('ul');
        let button1 = document.createElement('button');

        userBilder(user, userUl ); //  Викликаємл функцію яка будує Юзера
        button1.innerText = 'Post of current user';

        document.body.append(userDiv);
        userDiv.appendChild(userUl);
        userDiv.appendChild(button1);

        userDiv.classList.add('userDiv');
        button1.classList.add('button1');




        // натискання батона створення
        let userPosts = document.createElement('div');
        userPosts.classList.add('postElements')
        userDiv.appendChild(userPosts);
        let bTrig = false;
        button1.onclick = () => {
            if (!bTrig) {
                console.log('натиснув')
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(res => res.json())
                    .then(userPost => {
                        console.log(userPost)
                        for (const PostOfUser of userPost) {
                            let postDiv = document.createElement('div');
                            let postPar = document.createElement('p');
                            let postButton = document.createElement('button');

                            userPosts.appendChild(postDiv);
                            postDiv.appendChild(postPar);
                            postDiv.appendChild(postButton);

                            postDiv.classList.add('postDiv')


                            postPar.innerText = `${PostOfUser.title}`;
                            postButton.innerText = 'Post details'
                            postButton.onclick = () => {

                               location.href=`../postDetails/post-details.html?postId=`+JSON.stringify(PostOfUser.id);

                            }
                        }

                    })
            } else {
                userPosts.innerHTML = ``;
                console.log('відтиснув')
            }
            bTrig = !bTrig
        }


    })

function userBilder(userObject, tag) {
    for (const key in userObject) {
        if (typeof userObject[key] !== 'object') {
            const li = document.createElement('li');
            li.innerHTML = `<b>${key.toUpperCase()}</b>:  ${userObject[key]}`;
            tag.appendChild(li);
        } else {
            const ul = document.createElement('ul');
            const li = document.createElement('li');
            ul.innerHTML = `<br><b>${key.toUpperCase()}:</b>`;
            tag.appendChild(ul);
            userBilder(userObject[key], ul)
        }
        
    }

}