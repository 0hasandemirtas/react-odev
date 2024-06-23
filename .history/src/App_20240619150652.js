import './App.css';
import Header from "./components/header";
import {Routes, Route} from 'react-router-dom'
import Anasayfa from './pages/Anasayfa';
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={Anasayfa}/>
      <Route path='/hakkımda' element={home}/>
      <Route path='/' element={home}/>
      <Route path='/' element={home}/>
    </Routes>
    </div>
  );
}

export default App;
