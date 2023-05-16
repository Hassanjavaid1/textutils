//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//import TextForms from'./components/TextForms';
//import './components/Texts.css'
//import Test from './components/Test'
import  './components/Style.css'
import Forms from './components/Forms'
//import About from './components/About'
function App() {

 
  const [mode,setMode] = useState('light')
    const [change,setChnage] = useState('Enable Dark Mode')
const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark')
    setChnage('Disable Dark Mode')
    document.body.style.backgroundColor = 'white'
    document.body.style.backgroundColor = '#000432'
    document.body.style.color = "white"
    document.title = 'textutls - Dark Mode'
   
      
   
  }else{
    setMode('light')
    setChnage('Enable Dark Mode')
    document.body.style.color = '#000432'
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    document.title = 'textutls - Light Mode'
  }
}
    
return (

  /*
  </div><Test home = "Home" about = "About" contact = 'Contact Us' />
  <div className="container my-3">*/
<>

  <div className="container">
<Forms Home = 'Home' About = "About Us" Contact = "Contact Us" heading = "Enter Text here" mode = {mode} toggleMode ={toggleMode} change ={change}/>
</div>

</>

)
}

export default App;
 