import React from 'react';
import logo from './kyary2.jpg';
import './scss/App.scss';

function App() {
  return (
    <div className="App">

      <div className="App-card">

      <header className="App-header">
        <img src={logo} alt="kyary user profile" className="card__avatar"/>
        <div className="card__info">
          <h1 className="card__info-user-name">
            Kyary Pamyu pamyu
          </h1>
          <p className="card__info-date">
            Kyary Pamyu Pamyu (きゃりーぱみゅぱみゅ Kyarī Pamyu Pamyu?, Nishitōkyō, Tokio, 29 de enero de 1993), cuyo verdadero nombre es Kiriko Takemura (竹村 桐子 Takemura Kiriko?), es una modelo, blogger y cantante japonesa.1​ Su música es producida por Yasutaka Nakata, fundador del grupo Capsule.
          </p>
        </div>
      </header>
      </div>
    </div>
  );
}

export default App;

{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}