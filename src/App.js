import React from 'react';
import './scss/App.scss';
import HeaderCard from './components/HeaderCard';
import MainCard from './components/MainCard';
import kyaryPhoto from './images/kyary2.jpg';

function App() {
  const cardUserName = "Kyary Pamyu pamyu";
  const date = "Hola! Hoy es 4 de Septiembre de 2019";

  return (
    <div className="App">
      <div className="App-card">

      <HeaderCard 
        userName={cardUserName} 
        date={date}
        imgSrc={kyaryPhoto}
        />
      
      <MainCard />

      </div>
    </div>
  );
}

export default App;