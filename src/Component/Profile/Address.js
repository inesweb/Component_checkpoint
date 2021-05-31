import React from 'react'
import './Style.css'
function Adress() {
   
    const adress = 'Belle Planet lives at 223 Center Street, Venus, New York 10001';
    return (
      <div >
      
      <h3 className ="adr"> Adress:</h3> {adress}
      </div>
    );
  }
export default Adress;
