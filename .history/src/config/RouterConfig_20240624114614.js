import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About'
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NotFoundPage from '../pages/NotFoundPage';

function RouterConfig() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </div>
  )
}d
export default RouterConfig