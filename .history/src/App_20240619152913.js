import './App.css';
import Header from "./components/header";
import {Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import about from './pages/about'; 
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/home';
import about from './pages/about';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
