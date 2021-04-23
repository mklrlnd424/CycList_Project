import React, { useEffect, useState } from 'react';
import WeatherDisplay from './WeatherDisplay'



const GetWeather = (props) => {
  
  const WEATHER_API_URL = 'http://api.weatherapi.com/v1/current.json?key='
  const WEATHER_API_KEY = 'f39d610ee89543c0ad2210538212204'
  

  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${WEATHER_API_URL}${WEATHER_API_KEY}&q=${lat},${long}&aqi=no`)
      .then(res => res.json())
      .then(result => {
        setWeatherData(result)
        
      });
    }
    fetchData();
    
  }, [lat,long])
 
  
  return (
    <div>
      { (weatherData) ? (
        
        <WeatherDisplay weatherData={weatherData}/>
        
      ) : (
        <div> Nope this isn't working </div>
      )}
      
    </div>
  )
}



export default GetWeather;