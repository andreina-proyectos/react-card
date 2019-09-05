import React from 'react';
import logo from '../images/kyary2.jpg';

class HeaderCard extends React.Component {
  render () {
    return(
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
    )
  }
}

export default HeaderCard;