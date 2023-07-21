import { useState } from 'react'
import './App.css'
import HomePage from './myComponents/homepage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './myComponents/contact/Contact';
import About from './myComponents/about/About';
import Navbar from './myComponents/Navbar';
import Footer from './myComponents/Footer';
import Classes from './myComponents/classes/Classes';
import Gallery from './myComponents/gallery/Gallery';
import Pricing from './myComponents/pricing/Pricing';
import Schedule from './myComponents/schedule/Schedule';

function App() {
	return(
		<>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/contact' element={<Contact/>}></Route>
				<Route path='/about' element={<About/>}></Route>
				<Route path='/classes' element={<Classes/>}></Route>
				<Route path='/gallery' element={<Gallery/>}></Route>
				<Route path='/pricing' element={<Pricing/>}></Route>
				<Route path='/schedule' element={<Schedule/>}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>		
		</>
	);
}

export default App
