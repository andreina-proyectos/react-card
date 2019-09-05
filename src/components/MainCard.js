import React from 'react';

class MainCard extends React.Component {
  render() {
    return (
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
    )
  }
}

export default MainCard;