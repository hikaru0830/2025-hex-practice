const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list');

let data = [];
// 畫面渲染
function renderData(){
    let str = '';
    data.forEach(function (item,index) {
        str+=`<li>${item.content} <input type="button" data-type="deleteBtn" data-num="${index}" value="刪除待辦"></li>`
    })
    list.innerHTML = str;
}

// 新增待辦功能
save.addEventListener('click',function(e){
    if (txt.value=="") {
        alert("請輸入內容");
        return;
    }
    let obj = {};
    obj.content = txt.value
    data.push(obj);
    renderData();
})

// 刪除待辦功能
// ＊ 因為還沒有任何list的時候，對button下監聽會出錯，因為找不到該節點
// ＊ 所以對整個ul做監聽，再用e.target以及data-*去判斷 按到的是什麼元素
// ＊ 若不是刪除按鈕就return
list.addEventListener("click",function(e){
    debugger
    if(e.target.dataset.type !== "deleteBtn"){
        return;
    }
    let num = e.target.getAttribute("data-num");
    console.log(num);
    data.splice(num,1);
    alert("刪除成功！");
    renderData();
})
