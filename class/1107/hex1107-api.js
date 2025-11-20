// 請代入自己的網址路徑
const api_path = "hikaruxienz";
const token = "1C2uoF5CJgcIK0u0gMTTrgXxKRv2";
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
const cartList = document.querySelector('.cartList');
const productList = document.querySelector('.productList');

init();


// ========================================

// 初始化
function init() {
    getProductList();
    getCartList();
}

// 取得產品列表
let products = [];
function getProductList() {
    axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`).
    then(function (response) {
        console.log(response.data);
        products = response.data.products;
        Toast.fire({
            icon: "success",
            text: "商品取得成功"
        });
        renderProduct();
    })
    .catch(function(error){
        console.log(error.response.data);
        Swal.fire({
            icon: "error",
            titile: "商品取得失敗"
        });
    });
}
function renderProduct() {
    let str = '';
    products.forEach((product) => {
        str += `<li>${product.title} <input type="button" value="加入購物車" class="js-addCart" data-id="${product.id}"/></li>`
        productList.innerHTML = str;
    });
}

// 加入購物車
function addCartItem(id) {
    axios.post(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`, {
    data: {
        "productId": id,
        "quantity": 8
    }
    }).
    then(function (response) {
        console.log(response.data);
        getCartList();
    });
}

productList.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    console.log(id);

    if (e.target.classList.contains('js-addCart')) {
        addCartItem(id);
    }
});

// 取得購物車列表
let carts = [];
function getCartList() {
    axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`).
    then(function (response) {
        console.log(response.data);
        carts = response.data.carts;
        renderCarts();
    })
}
function renderCarts() {
    let str = '';
    carts.forEach((cart) => {
        str += `
        <li>${cart.id} ${cart.product.title} ${cart.quantity}
            <button class="js-deleteCart" type="button" data-id="${cart.id}">刪除購物車</button>
        </li>`
        cartList.innerHTML = str;
    });
}

// 清除購物車內全部產品
function deleteAllCartList() {
    axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`).
    then(function (response) {
        console.log(response.data);
    })
}

// 刪除購物車內特定產品
function deleteCartItem(cartId) {
    axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts/${cartId}`).
    then(function (response) {
        console.log(response.data);
        getCartList();
    })
}

cartList.addEventListener('click', (e) => {
    let id = e.target.dataset.id;
    if (e.target.classList.contains('js-deleteCart')); {
        deleteCartItem(id);
    }
});

// 送出購買訂單
function createOrder() {

    axios.post(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/orders`,
    {
        "data": {
            "user": {
                "name": "六角學院",
                "tel": "07-5313506",
                "email": "hexschool@hexschool.com",
                "address": "高雄市六角學院路",
                "payment": "Apple Pay"
            }
        }
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function(error){
        console.log(error.response.data);
    })
}

// 取得訂單列表
function getOrderList() {
    axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders`,
    {
        headers: {
        'Authorization': token
        }
    })
    .then(function (response) {
        console.log(response.data);
    })
}

// 修改訂單狀態
function editOrderList(orderId) {
    axios.put(`https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders`,
    {
        "data": {
        "id": orderId,
        "paid": true
        }
    },
    {
        headers: {
        'Authorization': token
        }
    })
    .then(function (response) {
        console.log(response.data);
    })
}

// 刪除全部訂單
function deleteAllOrder() {
    axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders`,
    {
        headers: {
            'Authorization': token
        }
    })
    .then(function (response) {
        console.log(response.data);
    })
}

// 刪除特定訂單
function deleteOrderItem(orderId) {
    axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders/${orderId}`,
    {
        headers: {
        'Authorization': token
        }
    })
    .then(function (response) {
        console.log(response.data);
    })
}
