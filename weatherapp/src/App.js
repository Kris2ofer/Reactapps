import './App.css';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import ShowWeather from './components/ShowWeather'
import Searchbar from './components/Searchbar';


function App() {

  const [latitude, setLatitude] = useState(47);
  const [longitude, setLongitude] = useState(50);
  const [current, setCurrent] = useState([]);
  const [location, setLocation] = useState([]);
  const [description, setDescription] = useState('');
  const [inputData, setInputData] = useState('');
  const ACC_key = '*****************';

  useEffect(()=> {
    //get device location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          let newCoords = {
            latitude: setLatitude(position.coords.latitude),
            longitude: setLongitude(position.coords.longitude)
          }

          //Call the web API
          // Axios.get(`http://api.weatherstack.com/current?access_key=${ACC_key}&query=${latitude},${longitude}`)
          // .then(res => {

          
          fetchData();
           
      })
    } else {
      console.log("not supported")
    }
  }, []);

  const fetchData = async () => {
    let response = await (
      await fetch(`http://api.weatherstack.com/current?access_key=${ACC_key}&query=${latitude},${longitude}`)
    ).json();
    
      setCurrent(response.current);
      setLocation(response.location);
      setDescription(response.current.weather_descriptions[0]);
    
      
   
  };

  

  //monitor input key
  const changeRegion = (e) => {
   setInputData(e.target.value);
   

  };

  const changeWeather = (event) => {
    event.preventDefault();
    

    // call web API
    fetchDataForm();
  }

  const fetchDataForm = async () => {
    let response1 = await (
      await fetch(`http://api.weatherstack.com/current?access_key=${ACC_key}&query=${inputData}`)
    ).json();
    
      setCurrent(response1.current);
      setLocation(response1.location);
      setDescription(response1.current.weather_descriptions[0]);
    
      
   
   };
 
  return (
    <div className="App">
     <div className="container">
     <Searchbar changeRegion={changeRegion} changeWeather={changeWeather}/>
        <ShowWeather location={location.name} temperature={current.temperature} description={description}
        region={location.region} country={location.country} wind_speed={current.wind_speed}
        pressure={current.precip} img={current.weather_icons} humidity={current.humidity} precip = {current.precip}
        />
       
      </div>
    </div>
  );
}

export default App;
