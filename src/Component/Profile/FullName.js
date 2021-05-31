import React from 'react'
import './Style.css'
function FullName() {
   
    const fullname = 'ines zekri';
    return (
      <div>
    
    <h3> Name:</h3>    <h3 className ="name">{fullname}</h3>
      </div>
    );
  }
export default FullName;
