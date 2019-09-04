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
           Hola! Hoy es 4 de Septiembre del 2019
          </p>
        </div>
      </header>

      <main className="card__main">
        <p className="main__content">
          Kyary Pamyu Pamyu (きゃりーぱみゅぱみゅ Kyarī Pamyu Pamyu?, Nishitōkyō, Tokio, 29 de enero de 1993), cuyo verdadero nombre es Kiriko Takemura (竹村 桐子 Takemura Kiriko?), es una modelo, blogger y cantante japonesa.1​ Su música es producida por Yasutaka Nakata, fundador del grupo Capsule.
        </p>

        <div className="main__more-info">
            <a target="_blank" href="https://www.youtube.com/watch?v=mAGyQ5Rmz7o" className="more-info__link">
              Leer más...
            </a>
            <div className="likes">
              <span className="likes__number">37</span>
              <i className="fas fa-heart"></i>
            </div>
        </div>
      </main>
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