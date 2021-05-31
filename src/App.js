import React from 'react'
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import FullName from './Component/Profile/FullName'
import Adress from './Component/Profile/Address'


//import './App.css';

function App() {
  return (
    <div className="App">
      <h2 className="App-profil"> Profil</h2>
       <ProfilePhoto/>
       <div className=" name-adr">
      <FullName/>
      <Adress/>
      </div>
     
    </div>
  );
}

export default App;
