import React, { useState } from 'react';

export default function Form() {
  const [input, setInput] = useState({
    username:"", 
    password:""
  });   // de esta forma se guardan todos los valores input como props de un objeto y es mas efisciente
    // input = {username, passowrd}

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    // esta forma es mas inefisciente porque hay que repetir el codigo para cada input

  const [error, setError] = useState('');
  function validateUser(value) {
    if(!/\S+@\S+\.\S+/.test(value)) {
        // el estado error deja de estar vacio!
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setUsername(value);
  }

  let onSubmit = (e) => {
    e.preventDefault(); // evitamos el comportamiento que tiene por defaut el evento:onSmbit, 
    // lo que va a suceder es que no se va a recargar la pagina
    console.log(username);
    console.log(password);
    console.log(error);
  }

  return (
      <form>
        <input className={error && 'danger'}
          name="username" value={username} placeholder="username" onChange={(e) => validateUser(e.target.value)}/>
        {/* {!error ? null : <span>{error}</span>} */}
        {error ? <span>{error}</span> : null} 
        {/* si no hay error (!error) no me muestres nada, mostra null. Si hay error mostra el error  */}
        <input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    );
}
