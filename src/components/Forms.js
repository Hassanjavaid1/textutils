import React, { useState } from 'react'
export default function Forms(props) {
  const handleUpclick=()=>{
  let newtext = text.toUpperCase()
  setText(newtext)
  }
  const handleonChange =(event)=>{
    setText(event.target.value)
  
}
const handleLoClick=()=>{
  let newtext = text.toLowerCase()
  setText(newtext)
}
const Clear =()=>{
  setText('')

}

const random=() => {
let  red = Math.floor(Math.random() * 26)
 let blue  = Math.floor(Math.random() * 276)
 let  yellow  = Math.floor(Math.random() * 256)
 const Color = `rgb(${red}, ${blue}, ${yellow})`
document.body.style.background = Color

}
const [text,setText] =useState ('')
let Redcolor = ()=>{
  document.body.style.background = "red"
  document.body.style.color = "black"
  
}
let yellowcolor = ()=>{
  document.body.style.background = "yellow"
  document.body.style.color = "black"
  
}
let greencolor = ()=>{
  document.body.style.background = "green"
  document.body.style.color = "white"
  
}
let aquacolor = ()=>{
  document.body.style.background = "aqua"
  document.body.style.color = "black"
  
}
let bluecolor = ()=>{
  document.body.style.background = "blue"
  document.body.style.color = "white"
  
}
let purplecolor = ()=>{
  document.body.style.background = "purple"
  document.body.style.color = "red"
  
}




  return (
    <>
    <nav className="rightnav h-nav-resp">
    <ul  className="nav-list v-class-resp">
    <div>
</div>
 <li><a href="#">{props.Home}</a></li>
 <li><a href="#">{props.About}</a></li>
 <li><a href="#">{props.Contact}</a></li>
<span className="colors">
  <span onClick={Redcolor} className='para'>Red Mode </span>
  <span onClick={yellowcolor} className='para1'>Yellow Mode</span>
  <span onClick={purplecolor} className='para2'>Purple Mode</span>
  <span onClick={aquacolor} className='para3'> Aqua Mode</span>
  <span onClick={greencolor} className='para4'>Green Mode</span>
  <span onClick={bluecolor} className='para5'>Blue Mode</span>
</span>
</ul>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick = {props.toggleMode} id="mode"/>
  <label className="form-check-label" id='change'>{props.change}</label>
</div>
</nav>
<div className="container">
<h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" rows="10" value={text}  onChange={handleonChange} ></textarea>
  <div className='position'>
  <button className="btn" onClick={handleUpclick}>Convert to UpperCase</button> 
    <button className="btn" onClick={handleLoClick}>Convert to Lowercase</button> 
    <button className="btn" onClick={Clear}>Clear All Text</button> 
    <button className="btn" onClick={random}>Choose Theme</button> 
    </div>
    </div>
<div className="combine">
<h1 className='heading'>Text summary</h1>
<p>{text.trim() === '' ? '0' : text.trim().split(' ').length} words and {text.length} characters</p>
<p>{0.008 * text.split('').length}Minutes read</p>
<p>{text}</p>
</div>
</div>
</>
  )
}
