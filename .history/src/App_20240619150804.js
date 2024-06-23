import './App.css';
import Header from "./components/header";
import {Routes, Route} from 'react-router-dom'
import Anasayfa from './pages/Anasayfa';
import Hakkımda from './pages/Hakkımda';
import projelerim from './pages/projelerim';
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={Anasayfa}/>
      <Route path='/projelerim' element={projelerim}/>
      <Route path='/' element={Hakkımda}/>
      <Route path='/' element={home}/>
    </Routes>
    </div>
  );
}

export default App;
