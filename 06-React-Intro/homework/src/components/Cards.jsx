import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css';

export default function Cards(props) {
  // props = {cities}
  // cities = [{}, {}, {}]
  // acá va tu código
  // tip, podés usar un map
  if (!props.cities){
    return <h1>No hay ciudades disponibles</h1>
  }
  return (
    <div className={styles.container}>
      {
      props.cities && props.cities.map(city => (
          <Card   
          key={city.id}     //!!!! IMPORTANTE PARA TRABAJAR ON MAP Y RENDERIZADO COMPUESTO
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
        ))
      }
    </div>
  )
};

// class Cards extends React.Component{
//   render(){
//     return (
//       <div>
//       {
//         this.props.cities && this.props.cities.map(city => (
//           <Card
//           key = {city.id}     //!!!! IMPORTANTE PARA TRABAJAR ON MAP Y RENDERIZADO COMPUESTO
//           max={city.main.temp_max}
//           min={city.main.temp_min}
//           name={city.name}
//           img={city.weather[0].icon}
//           onClose={() => alert(city.name)}
//         />
//         ))
//       }
//     </div>   
//     )
//   }
// }
// export default Cards;