import logo from './logo.svg';
import Sidebar from '../src/components/Sidebar';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Page1 from "./components/page1";
import Page2 from "./components/page2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="page1" element={ <Page1/> } />
        <Route path="page2" element={ <Page2/> } />
        <Route path="side" element={ <Sidebar/> } />
      </Routes>
      
    </div>
  );
}

export default App;
