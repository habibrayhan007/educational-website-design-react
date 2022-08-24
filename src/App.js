import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Header from "./components/common/heading/Header"
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
      </Routes>
    </Router>
      
    </>
  )
}

export default App
