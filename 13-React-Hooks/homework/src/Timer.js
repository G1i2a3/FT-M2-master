import React, {useState, useEffect, useRef} from 'react';

import './Timer.css';

const Timer = () => {

  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');

  const myRef = useRef(null);

  // myRef --> null
  // unput ref={myRef}
  // myRef --> <input/>
  // myRef.current --> <input/>
  // myRef.current.value --> value del input


useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if (segundos <= 0 && tipo === 'Cuenta Regresiva') {
      reset();
      myRef.current.value = 0;
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);


  function toggle() {
    setActivo(!activo);
    // setActivo(oldValue => !oldValue);
  }

  function reset() {
    setSegundos(0);
    myRef.current.value = 0;
    setActivo(false);
  }

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
}

function agregaSegundos() {
  // `current` apunta al elemento de entrada de texto montado
  let ref = myRef.current.value
  setSegundos(Number(ref));
}

  return (
    <div className="app">
      <div className="time">
        {segundos} s
      </div>
      <div className="row">
        {/* active ---? button button-primary button-primary-active
        inactive ---? button button-primary button-primary-inactive */}
        <button
          button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`}
          onClick = {toggle}
        >
          {activo ? "PAUSA" : "INICIO"}
        </button>
        <button
          button className="button-secondary"
          onClick = {reset}
        >
        Reset
        </button>
      </div>
      <button
        button className="button"
        onClick={cambioTipo}
      >
          {tipo}
      </button>
      {tipo === "Cuenta Regresiva" 
        ? <input type="number" placeholder="Ingresa Segundos" autoComplete="off"
          ref= {myRef}
          onChange={agregaSegundos} 
        /> 
      : null}
    </div>
  );
};

export default Timer;
