import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<>
			<header className='main-header'>
				<div className='navbar-container'>
					<Navbar />
				</div>
			</header>
			<div className='app'>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
			<Footer/>
		</>
	)
}

export default App
