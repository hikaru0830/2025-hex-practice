import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Week1 from './pages/week1/Week1'
import Week2 from './pages/week2/Week2'
import Lottie from './pages/lottie/Lottie'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/week1" element={<Week1 />}></Route>
				<Route path="/week2" element={<Week2 />}></Route>
				<Route path="/lottie" element={<Lottie />}></Route>
			</Routes>
		</>
	);
}

export default App
