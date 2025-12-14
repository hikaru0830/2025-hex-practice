// 2021 年前端/UI 從業人員現況問卷調查 API
// METHOD：GET/POST/DELETE/PUT
// API URL：https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json
// 資料格式：json

// 發API的4種方式
// 1. Query String
// 網址 ?Id=123&.....

// 2. Header
// axios.post('', {header:{...}});
    
// 3. Request Body
// axios.post('', {userId:...});

// 4. Cookies
// 框架班會用到


// ==================== 下半堂 ====================
// axios 規定的順序：
    // 1. 路由 (url)
    // 2. request data
    // 3. header

// POST 建立/加入 =>
// DELETE 刪除
// PATCH 修改
// PUT

const apiPath = 'hikaruxienz';

// 取得產品列表
function getProductList() {
    axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/products`)
        .then((response) => {
            console.log(response.data);
        });
}

// 加入購物車
function addCartItem() {
    // 此api文件有寫要用body
    axios.post('https://livejs-api.hexschool.io/api/livejs/v1/customer/hikaruxienz/carts', {
            data: {
                productId: '1E01K4jqdzcC6RQj8Iob',
                quantity: 3
            }
        })
        .then((response) => {
            console.log(response.data);
        });
}


function destroyAllCartList(){
    axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${apiPath}/carts`)
        .then((response) => {
            console.log(response.data);
        });
}

// 取得訂單列表(管理者)
// 跟管理者有關的，因為是危險操作，一定要驗證過你是管理者才能使用，
// 需要在api的header裡放authorization的欄位(就是api path 好像?)