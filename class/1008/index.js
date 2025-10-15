// getElement => HTMLCollection
// console.log(document.getElementById('title'));
// console.log(document.getElementsByClassName('titleClass'));
// console.log(document.getElementsByTagName('h1'));

// query => NodeList
// console.log(document.querySelector('#title'));
// console.log(document.querySelector('.titleClass'));
// console.log(document.querySelectorAll('p'));


let h1 = document.querySelector('#title');
h1.textContent = 'hello world!!!';

h1.innerHTML = '<p>hello world2222</p>';


//#region appendChild 擴增子元素
let list = document.querySelector('.list');
console.log(list);

let li2 = document.createElement('li');
let li3 = document.createElement('li');
li2.textContent = '222';
li3.textContent = '333';

// list.appendChild(li2);
list.append(li2, li3);
//#endregion


//#region addEventListener 監聽事件
let btn = document.querySelector('.button');
btn.addEventListener('click', function() {
    alert('我被點擊了<3');
});
//#endregion

//#region 隨堂小測驗
let ul = document.querySelector('ul')
ul.innerHTML = '<li>小光<3</li>';
//#endregion