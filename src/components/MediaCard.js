import React from 'react';
import HeaderCard from './HeaderCard';
import MainCard from './MainCard';
import kyaryPhoto from '../images/kyary2.jpg';

class MediaCard extends React.Component {
  render() {
    const cardUserName = "Kyary Pamyu pamyu";
    const date = "Hola! Hoy es 4 de Septiembre de 2019";
    const cardDescription = "Kyary Pamyu Pamyu (きゃりーぱみゅぱみゅ Kyarī Pamyu Pamyu?, Nishitōkyō, Tokio, 29 de enero de 1993), cuyo verdadero nombre es Kiriko Takemura (竹村 桐子 Takemura Kiriko?), es una modelo, blogger y cantante japonesa.1​ Su música es producida por Yasutaka Nakata, fundador del grupo Capsule."

    return (
      <div className="App">
        <div className="App-card">

        <HeaderCard 
          userName={cardUserName} 
          date={date}
          imgSrc={kyaryPhoto}
        />
        
        <MainCard 
          description={cardDescription}
        />

        </div>
      </div>
    );
    }
  }

export default MediaCard;