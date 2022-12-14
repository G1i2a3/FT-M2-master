const { INCREMENTO, DECREMENTO } = require('../action-types');

// {...state, new_state} ----> concatenando !
// {...state, contador:5} ----> copio state y reemplazo el valor de la propiedad contador


const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  switch(action.type){
      case INCREMENTO:
        return{
          ...state, contador: state.contador +1
        };
      case DECREMENTO:
        return {
          ...state, contador: state.contador -1
        };
      default:
        return {...state}
        // NO OLVIDARSE NUNCA DEL CASO DEFAULT! SIN ESTE LA APP LO ANDA 
    }
  }

  
//            dispatch
// Componentes ------> Action ------> Reducer -------> Nuevo estado 


module.exports = contador;