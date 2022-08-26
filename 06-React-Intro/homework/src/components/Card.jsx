import React from 'react';
import s from '../styles/Card.module.css';

export default function Card(props) {
  // props = {max, min, name, img, onClose}
  // acá va tu código
  return (
    <div className={props.name === "Cairns" ? s.cardDifferent : s.card}>
      <button onClick={props.onClose} className= {`${s.btn} ${s.btnColor}`} >X</button>
      <h4>{props.name}</h4>
      <div className={s.middleDiv}>
        <div>
        <p>Min</p>
        <p>{props.min}</p>
        </div>
        <div>
        <p>Max</p>
        <p>{props.max}</p>
        </div>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt= {"img"}/>
    </div>
  )
};