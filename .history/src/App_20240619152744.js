import './App.css';
import Header from "./components/header";
import {Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects';
import About from './pages/About';
import Communication from './pages/Communication';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projelerim' element={<Projects/>}/>
      <Route path='/hakkımda' element={<About/>}/>
      <Route path='/iletisim' element={<Contact/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
