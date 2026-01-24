import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Week1 from './pages/week1/Week1'
import Week2 from './pages/week2/Week2'
import Lottie from './pages/lottie/Lottie'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/week1" element={<Week1 />}></Route>
				<Route path="/week2" element={<Week2 />}></Route>
				<Route path="/lottie" element={<Lottie />}></Route>
			</Routes>
		</>
	);
}

export default App
