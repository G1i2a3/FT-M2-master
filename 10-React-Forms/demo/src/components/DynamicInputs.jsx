import React, { useState } from 'react';

// Este es el Form con inputs dinamicos que armamos en el README.md de la teoria.

// Estado --> [{...}]         --> es un array con objetos

// Boton  --> [{...}, {...}]  --> cuando agrego se le agrega un objeto a ese mismo array

// Renderizado --> estado.map(e => <></>) --> hace un .map (muesta en pantalla) de todos los elementos del array cumpliendo un pedazo de codigo de html
 
function DinamicInputs() {  
  //const modeloFamiliar = { nombre: '' };

  const [familiar, setFamiliar] = useState([
    {nombre:''}
  ]);

  const [persona, setPersona] = useState('');
  // persona = {nombre: ''}
  
  const agregaFamiliar = () => {
      setFamiliar([...familiar, { nombre: persona}]);
      setPersona('');
  };

    // familiar = [{nombre:'Giannina'}] + {nombre:'Walter'} => familiar = [{nombre:'Giannina'}, {nombre:'Walter'}]; 

  const handlePersonaChange = (e) => setPersona(e.target.value); 
  // nombre: 'Giannina' // nombre: 'Walter'
    // una copia del objeto entero de persona, y sobreescribi el valor que esta entre []
      // en este caso [name]: 'Giannina'

  const handleFamiliarChange = (e) => {
    const familiares = [...familiar];
    familiares[e.target.id][e.target.dataset.name] = e.target.value;
    setFamiliar(familiares);
  };

  const handleSubmit = e => {
    e.preventDefault()
    console.log(familiar)
  }

  return (        
    <form onSubmit={handleSubmit}>            
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={persona}
        onChange={handlePersonaChange}
      />  
      <input
        type="button"
        value="Agrega un Familiar"
        onClick={agregaFamiliar}
      />
      {
      familiar.map((el, i) => (
        <div key={`persona-${i}`}>
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
          <input
              type="text"
              name={`nombre-${i}`}
              id={i}
              data-name="nombre"
              value={el.nombre}
              onChange={handleFamiliarChange}
          />
        </div>
      ))
      }
      <input type="submit" value="Submit" />        
    </form>   
  );
};

export default DinamicInputs;