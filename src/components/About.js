import React, { useState } from 'react'

export default function About() {
  
  const[myStyle,setmyStyle]= useState({
    background:'black',
    color:'white'
  })
  const [btn,setbtn] = useState('Enabled Dark mode')
 const toggleStyle=()=>{
  if(myStyle.color === 'white'){
    setmyStyle({
      color:'black',
      backgroundColor:'white'
    })
    setbtn('Disabled Dark mode')
  }
  else{
    setmyStyle({
      color:'white',
      background:'black',
      border:'3px solid red'
    })
    setbtn('Enable Dark mode')
  }
 }
  
  return (
    

     <>
    <div className="container" style={myStyle}>
      <h1>About Us</h1>
    </div>
    <div className="container1" style={myStyle}>
    <p className='para'style={myStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, fugiat! Exercitationem dignissimos maiores ut error iusto minus deserunt hic quia itaque quos, consectetur, praesentium commodi. Tempore mollitia, vitae explicabo hic, nostrum error natus magnam laborum doloremque ex eius harum accusamus laudantium alias libero dolores? Blanditiis deleniti labore ea delectus porro!</p>
    <p className='para'style={myStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, fugiat! Exercitationem dignissimos maiores ut error iusto minus deserunt hic quia itaque quos, consectetur, praesentium commodi. Tempore mollitia, vitae explicabo hic, nostrum error natus magnam laborum doloremque ex eius harum accusamus laudantium alias libero dolores? Blanditiis deleniti labore ea delectus porro!</p>
    <p className='para'style={myStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, fugiat! Exercitationem dignissimos maiores ut error iusto minus deserunt hic quia itaque quos, consectetur, praesentium commodi. Tempore mollitia, vitae explicabo hic, nostrum error natus magnam laborum doloremque ex eius harum accusamus laudantium alias libero dolores? Blanditiis deleniti labore ea delectus porro!</p>
    </div>
    <button className="btn btn-primary" type= 'btn' onClick={toggleStyle}>{btn}</button>
    </>
  )
}
