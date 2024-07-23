
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

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
		</>
	)
}

export default App
