import React from 'react';
import estilos from '../styles/SearchBar.module.css';


export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={estilos.container}>
      <input type= "text" placeholder='Ciudad...' />
      <button onClick={()=> props.onSearch("Buscando Ciudad")} variant="Success">AGREGAR</button>
      {/* <button onClick={()=> props.onSearch("Buscando Ciudad")} className={estilos.btn}>Agregar</button> */}
    </div>
  )
};