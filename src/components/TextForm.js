import React,{useState} from 'react'
export default function TextForm(props) {
  
   //Creating state.
   const [text , setText] = useState('');

  const handleUpClick =()=>{
    let newtext = text.toUpperCase()
    setText(newtext)
      console.log(newtext)
        
    } 
    const handleLoClick =()=>{
      let newtext = text.toLowerCase()

      setText(newtext)
    } 
    const clearText= ()=>{
      setText('');
      
    } 

 

    
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const bg = {
 
      height:' 54px',
      width:'118%',
      padding:'10px',
    
    }

  
    const mode1= {
      position: 'relative',
      left: '399px',
      margin: 'auto',
      top: '-3px'
    
  }
  const area={
    background:'wheat'
  }


    
    
    
  return (
    
    <>
    <div className="body">
    <div className='container'>
      <ul style={bg}>
        <li>{props.Home}</li>
        <li>{props.About}</li>
        <li>{props.Contact}</li>
        <div className="mode form-check form-switch" style={mode1}  onClick={props.toggleMode}>
<input className="form-check-input"   type="checkbox" role="switch" id="modes"/>
</div>
<p className='change'>{props.change}</p>
      </ul>

    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value ={text}  onChange = {handleOnChange} id="myBox" rows="8" style={area}></textarea>
    </div>
    <button className="btn btn-primary max-3" onClick = {handleUpClick}>Convert to UpperCase</button> 
    <button className="btn btn-primary max-3"   onClick = {handleLoClick}>Convert to Lowercase</button> 
    <button className="btn btn-primary max4"   onClick = {clearText}>Clear All Text</button> 
    </div>
    <div className="container my-3">
        <h2>Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} chracters</p>
        <p>{0.008 *text.split('').length}Minutes read</p>
        <p>{text}</p>
    </div>
    </div>
    </>
  )
}
