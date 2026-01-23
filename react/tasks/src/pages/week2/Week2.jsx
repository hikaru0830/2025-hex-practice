import { useState } from "react";
import axios from "axios";
import "./style.css";

// API 設定
const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

function App() {
	// 登入資訊
	const [loginData, setLoginData] = useState({
		username: "",
		password: "",
	});

	// 是否登入
	const [isAuth, setIsAuth] = useState(false);
	// 產品列表
	const [products, setProducts] = useState([]);
	// 產品詳情
	const [productDetail, setProductDetail] = useState(null);

	function handleInputChange(e) {
		const {name, value} = e.target;
		setLoginData((preData) => ({
			...preData,
			[name]: value
		}))
	}

	async function onSubmit(e) {
		try{
			e.preventDefault();
			const response = await axios.post(`${API_BASE}/admin/signin`, loginData);
			const {token, expired} = response?.data;
			document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
			axios.defaults.headers.common['Authorization'] = token;
			setIsAuth(true);

			getProducts();
		}
		catch (error) {
			console.log(error.response?.data);
		}
	}

	async function checkLogin(e) {
		try {
			const token = document.cookie
				.split("; ")
				.find((row) => row.startsWith("hexToken="))
				?.split("=")[1];
			if (token) {
				axios.defaults.headers.common['Authorization'] = token;
				const response = await axios.post(`${API_BASE}/api/user/check`);
			}
		} catch (error) {
			console.log(error.response?.data)
		}
	}

	async function getProducts() {
		try {
			const response = await axios.get(`${API_BASE}/api/${API_PATH}/admin/products`);
			setProducts(response.data.products);
		}
		catch (error) {
			console.log(error.response?.data);
		}
	}

	return !isAuth
	? (
		<>
		<div className="container login">
			<h1>請先登入</h1>
			<form className="form-floating w-50">
			<div className="form-floating mb-3">
				<input className="form-control"
					type="email"
					name="username"
					placeholder="name@example.com"
					value={loginData.username}
					onChange={(e) => { handleInputChange(e) }} />
				<label htmlFor="username">Email address</label>
			</div>
			<div className="form-floating">
				<input className="form-control"
					type="password"
					name="password"
					placeholder="Password"
					value={loginData.password}
					onChange={(e) => { handleInputChange(e) }} />
				<label htmlFor="password">Password</label>
			</div>
			<button
				type="submit" className="btn btn-primary mt-3 w-100"
				onClick={(e) => {onSubmit(e)}}>
				登入
			</button>
			</form>
		</div>
		</>
	) : (
		<>
		<div className="container">
			<button className="btn btn-danger my-3"
				onClick={(e) => {checkLogin(e)}}>確認是否登入</button>
			<div className="row mt-5">
                <div className="col-md-6">
                <h2>產品列表</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>產品名稱</th>
                            <th>原價</th>
                            <th>售價</th>
                            <th>是否啟用</th>
                            <th>查看細節</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.origin_price}</td>
                            <td>{item.price}</td>
                            <td>{item.is_enabled ? '是' : '否'}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => {
                                    setProductDetail(item)
                                }}>查看細節</button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="col-md-6">
                <h2>單一產品細節</h2>
                {productDetail ? (
                    <div className="card mb-3">
                    <img src={productDetail.imageUrl} className="card-img-top primary-image" alt="主圖" />
                    <div className="card-body">
                        <h5 className="card-title">
                        {productDetail.title}
                        <span className="badge bg-primary ms-2">{productDetail.category}</span>
                        </h5>
                        <p className="card-text">商品描述：{productDetail.description}</p>
                        <p className="card-text">商品內容：{productDetail.content}</p>
                        <div className="d-flex">
                        <p className="card-text text-secondary"><del>{productDetail.origin_price}</del></p>
                        元 / {productDetail.price} 元
                        </div>
                        <h5 className="mt-3">更多圖片：</h5>
                        <div className="d-flex flex-wrap">
                        {productDetail.imagesUrl.map((image, index) => {
                            return <img key={index} src={image} className="mt-2" alt="更多圖片" />;
                        })}
                        </div>
                    </div>
                    </div>
                ) : (
                    <p className="text-secondary">請選擇一個商品查看</p>
                )}
                </div>
            </div>
		</div>
		</>
	);
}

export default App;
