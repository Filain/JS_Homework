//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так,
//     щоб було видно що це блоки (дати фон. марджини і тд)

let url = new URL(location.href);
let dat = url.searchParams.get('postId');
let postId = JSON.parse(dat);
console.log('PostId ' + postId);
let wrapper = document.createElement('div');
let posrMainWrap= document.createElement('div');
let posrMainWrapTitle= document.createElement('div');
let posrMainTitle= document.createElement('p');
let postMain = document.createElement('div');

document.body.append(wrapper);
wrapper.appendChild(posrMainWrap);
posrMainWrap.appendChild(posrMainWrapTitle);
posrMainWrap.appendChild(postMain);
posrMainWrapTitle.appendChild(posrMainTitle);

posrMainTitle.innerText=`Post Details`;


wrapper.classList.add('wrapper');
posrMainWrap.classList.add('posrMainWrap');
posrMainWrapTitle.classList.add('posrMainWrapTitle');
postMain.classList.add('postMain');



fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
        let postUl = document.createElement('ul');
        postMain.appendChild(postUl);
        postBilder(post, postUl)
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(res => res.json())
    .then(post => {
        for (const postElement of post) {
            console.log(postElement)

            let postDiv = document.createElement('div');
            let postUl = document.createElement('ul');

            postDiv.classList.add('postDiv');

            wrapper.appendChild(postDiv);
            postDiv.appendChild(postUl);
            // postUl.innerText=postElement.id;
            postBilder(postElement, postUl)
        }
    })


function postBilder(postObject, tag) {
    for (const key in postObject) {
        const li = document.createElement('li');
        li.innerHTML = `<b>${key.toUpperCase()}</b>:  ${postObject[key]}`;
        tag.appendChild(li);
    }
}
