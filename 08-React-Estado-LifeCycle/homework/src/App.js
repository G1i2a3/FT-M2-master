import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards';

export default function App() {

  const [cities, setCities] = useState([]);  // si hago React.useState no necesito importat react {useState} arriba. Tengo que hacer React.useState para el CP 
  // cities = [] (es un arreglo vacio)
    // setCities => f(funcion que actualiza el estado) 0 

    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

    function onSearch(city){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(responce => responce.json())
      .then(responce_json => {
        if(responce_json.main !== undefined){
          const city = {
            min: Math.round(responce_json.main.temp_min),
            max: Math.round(responce_json.main.temp_max),
            img: responce_json.weather[0].icon,
            id: responce_json.id,
            wind: responce_json.wind.speed,
            temp: responce_json.main.temp,
            name: responce_json.name,
            weather: responce_json.weather[0].main,
            clouds: responce_json.clouds.all,
            latitud: responce_json.coord.lat,
            longitud: responce_json.coord.lon
          }
          setCities(oldCities => [...oldCities, city]);
        }else{
          alert ("Ciudad no encontrada");
        }
      })
      .catch(e => console.log(e));
    }

    function onClose(id){
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}
