import './App.css';
import Header from "./components/header";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={home}/>
    </Routes>
    </div>
  );
}

export default App;
