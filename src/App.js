// import logo from './logo.svg';
import './App.css';

import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React,{useState} from "react";

import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  
  const generateAlert = (message, type)=>{
    setAlert({
      msg:message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const toggleMode = ()=>{
    if(mode=== "light"){
      setMode('dark');
      document.body.style.backgroundColor='#121212'
      generateAlert("Dark mode enabled!","Success");


    }else if(mode==="dark"){
      setMode('light');
      document.body.style.backgroundColor='#ffffff'

    }

  }


  return (
    <>

    <BrowserRouter>
    <Navbar title="Texts" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <Routes>

      <Route exact path="/" element={<div className="container"><Textform generateAlert={generateAlert} title="Enter the text to analyse" row="10" mode={mode} toggleMode={toggleMode}/></div>}/>

      <Route exact path="/about" element={<div className='container'> <About/></div>}/>

    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
