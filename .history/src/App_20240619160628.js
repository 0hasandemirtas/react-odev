import './App.css';
import Header from "./components/header";
import {Routes, Route} from 'react-router-dom'
import RouterConfig from './config/RouterConfig';


function App() {
  return (
    <div className="App">
      <Header/>
      <RouterConfig/>
    </div>
  );
}

export default App;
