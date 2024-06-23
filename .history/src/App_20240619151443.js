import './App.css';
import Header from "./components/header";
import {Routes, Route} from 'react-router-dom'
import Anasayfa from './pages/Anasayfa';
import Hakkımda from './pages/Hakkımda';
import Projelerim from './pages/projelerim';
import Iletisim from './pages/Iletisim';
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Anasayfa/>}/>
      <Route path='/projelerim' element={<Projelerim/>}/>
      <Route path='/hakkımda' element={<Hakkımda/>}/>
      <Route path='/iletisim' element={<Iletisim/>}/>
    </Routes>
    </div>
  );
}

export default App;
