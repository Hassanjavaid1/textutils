import React from 'react'
import {Link} from 'react-router-dom'
export default function Test(props) {
  return (
    <div>
      <div className="section">
        <Link to="/">{props.home}</Link>
        <Link to="about/">{props.about}</Link>
        <Link to="contact/">{props.contact}</Link>
      </div>
  <h1>this is  hassanjavaid and for the time we are on home page understood</h1>
    </div>
  )
  
}
