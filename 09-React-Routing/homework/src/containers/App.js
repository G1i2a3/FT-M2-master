import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import City from '../components/City';

import { Route, Switch } from 'react-router-dom';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.floor(recurso.main.temp_min),
            max: Math.floor(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.find(c => c.id === parseInt(ciudadId));
    return ciudad;
  }

  return (
    <div className="App">
      <Route path={'/'} render={()=><Nav onSearch={onSearch}/>}/>
      <Route exact path={'/'} render={()=><Cards cities={cities} onClose={onClose}/>}/>
      <Route exact path={'/about'} render={()=><About />}/>
      <Route path={'/city/:cityId'} render={({match})=><City city={onFilter(match.params.cityId)}/>} />
    </div>
  );
}

export default App;