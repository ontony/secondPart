let li = document.createElement("li"),

    list = document.querySelector(".menu");

list.appendChild(li);
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';

let lists = document.querySelectorAll('.menu-item');

console.log(lists);
let temp = lists[1];

list.removeChild(lists[1]);

let thirdLi = document.createElement("li");
thirdLi.classList.add('menu-item');
thirdLi.textContent = 'Третий пункт';
list.insertBefore(thirdLi, lists[3]);


let adv = document.querySelector('.adv'),
    col = document.querySelectorAll('.column');


console.log(col[1]);

col[1].removeChild(adv);

let text = document.querySelector('#title');

text.textContent = 'Мы продаем только подлинную технику Apple';
console.log(text);

// let body = document.getElementsByTagName('body');

// body.style.backgroundImege 

// console.log(body);

document.body.style.backgroundImage = "url('/img/apple_true.jpg')";

let ans = document.querySelector('.prompt');

let ask = prompt('отношение к технике apple', '');

ans.textContent = ask;

console.log(ans);