axios.get('https://hexschool.github.io/ajaxHomework/data.json')
    .then(function(response) {
        let data = response.data;
        let nameDiv = document.querySelector('.name');
        nameDiv.textContent = data[0].name + ' 綠色商店';
    });

// axios.get('/user?ID=12345')
//     .then(function(res) {
//         console.log(res);
//     })
//     .catch(function() {

//     })
//     .finally(function() {

//     });


//https://data.gov.tw/dataset/8814 取storeName資料
// 1. 取DOM
// 2. 取資料 => axios.get
// 3. 將取回的陣列顯示在畫面上

const list = document.querySelector('.list');
console.log(list);
let greenStores = [];

axios.get('https://data.moenv.gov.tw/api/v2/gp_p_01?api_key=4c89a32a-a214-461b-bf29-30ff32a61a8a&limit=1000&sort=ImportDate%20desc&format=JSON')
    .then(function(response) {
        console.log(response);
        greenStores = response.data.records;
        render();
    });

function render() {
    let str = '';
    greenStores.forEach((store, index) => {
        str += `<li>${store.storename}</li>`
    });
    list.innerHTML = str;
}