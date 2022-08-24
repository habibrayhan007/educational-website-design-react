import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Blog from './components/blog/Blog';
import Header from "./components/common/heading/Header"
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Price from './components/pricing/Price';
import Team from './components/team/Team';

function App () {
  return (
    <>
    <Router>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<CourseHome/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/pricing' element={<Price/>}/>
        <Route path='/journal' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
