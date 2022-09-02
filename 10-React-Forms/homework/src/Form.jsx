import React from 'react';

export function validate(input){
  let error = {};
  if(!input.username){
    error.username = 'Username is requiered';
  }else if (!/\S+@\S+\.\S+/.test(input.username)){  // /\S+@\S+\.\S+/ es la REGULAR EXPRESION de como corroborar que un email sea un email
    error.username = 'Username is invalid';
  }

  if(!input.password){
    error.password = 'Password is requiered';
  }else if (!/(?=.-*[0-9])/.test(input.password)){
    error.password = 'Password is invalid';
  }
  return error;
}

export default function  Form() {
  const [input, setInput] = React.useState({
    username:'',
    password:''
  });

  const [error, setError] = React.useState({});

  function handleInputChange (e) {
    setError(validate({
      ...input,
      [e.target.name] : e.target.value
    }));     //[e.target.name] -> manipular dos inputs distintos con la misma funcion
    // obtiene el nombre del atributo name del input que coincide con la propiedad
    // del objeto del estado

    setInput({
      ...input,
      [e.target.name] : e.target.value
    }); 

      // let objError = validate({ ...input, [e.target.name]: e.target.value });
      // setError(objError);

  };

  return (
    <form> 
      <div>
        <label>Username:</label>
        <input 
        type="text" 
        value={input.username} 
        onChange={handleInputChange} 
        name={'username'}
        className={error.username && 'danger'}
        placeholder= 'email valido'        
        />
        {
          error.username && 
          (<p className='danger'>{error.username}</p>)
        }        
      </div>
      <div>
        <label>Password:</label>
        <input 
        type="password"
        value={input.password} 
        onChange={handleInputChange} 
        name={'password'}
        placeholder= 'ingrese contraseña numerica' 
        className={error.password && 'danger'}
        />
        {
          error.password && 
          (<p className='danger'>{error.password}</p>)
        }   
      </div>
      <input type={'submit'} value={'Ingresar'} />
    </form>
  )
}
