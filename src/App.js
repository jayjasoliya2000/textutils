
import React,{useState} from "react";

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import Text from "./components/Text";
import About from "./components/About";

function App() {

  const [alert, setAlert] = useState(null);

  const [mode, setMode] = useState('light');

  const showAlert= (message,type)=>{
    setAlert({
      msg :  message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark') 
      document.body.style.backgroundColor = "#042761"
      showAlert("Dark Mode Enable","success" )
    }else{
      setMode('light')
      document.body.style.backgroundColor = "white"

      showAlert('light Mode Enable', 'success')
      
    }
  }
  return (
    <BrowserRouter>
      <NavBar mode={mode} toggleMode={toggleMode}/>
      { <Alert alert = {alert}/>}
     <Routes>
      <Route path="/" element = { <Text showAlert = {showAlert} mode = {mode}/>}/>
      <Route path="/about" element = { <About mode ={mode}/>}/>
     </Routes>
    
      </BrowserRouter>
  );
}

export default App;
