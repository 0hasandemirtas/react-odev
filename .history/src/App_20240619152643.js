import './App.css';
import Header from "./components/header";
import {Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects';
import about from './pages/about';
import Communication from './pages/Communication';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projelerim' element={<Projects/>}/>
      <Route path='/hakkımda' element={<About/>}/>
      <Route path='/iletisim' element={<Communication/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
