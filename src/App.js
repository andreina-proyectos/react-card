import React from 'react';
import './scss/App.scss';
import HeaderCard from './components/HeaderCard';
import MainCard from './components/MainCard';

function App() {
  const cardUserName = "Kyary Pamyu pamyu";

  return (
    <div className="App">
      <div className="App-card">

      <HeaderCard userName="Kyary Pamyu Pamyu" />
      
      <MainCard />

      </div>
    </div>
  );
}

export default App;