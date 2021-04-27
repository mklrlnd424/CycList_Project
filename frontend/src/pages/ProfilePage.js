import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import cyclistAPI from '../api/cyclistAPI'
import PostProfile from '../components/PostProfile'
import WeatherDisplay from '../components/WeatherDisplay'
import GetDirections from '../components/GetDirections'
import { Container, Row, Col, Button } from 'react-bootstrap'



const ProfilePage = () => {
  const userInfo = useContext(UserContext)
  const [data, setData] = useState([])

  
  const GetUserPosts = async () => {
    let credentials = {

      token: userInfo.token,
      user: userInfo.user.username,
      userID: userInfo.user.id
    }
    
    let response = await cyclistAPI.GetUserPosts(credentials)
    
    setData(response)
    
  };

  useEffect(() => {
    GetUserPosts();
  }, [])



  function renderProfilePage() {
  
    if (userInfo && userInfo.user) {
     
      let postElements = data.map((item, index) => {
        return <PostProfile key={index} post={item} />
      })

      return (
        <div>
          { postElements }
        </div>
      )

    } else {

      return( 
        <div>
          <h1>Profile Page</h1>
          <h2>You are not logged in</h2>
          <Link to="/login"><button>Login</button></Link>
          &nbsp;
          <Link to="/register"><button>Register</button></Link>
        </div>
      )
  
    }

  }
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);


  const WEATHER_API_URL = 'http://api.weatherapi.com/v1/current.json?key='
  const WEATHER_API_KEY = 'f39d610ee89543c0ad2210538212204'

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

  console.log(lat)
  console.log(long)
  console.log(weatherData)
  return (
  
      
      <Container >
        <Row>
        <Col >
          { renderProfilePage() }
        </Col>
        <Col >
          <div className="sticky-top">

          <Row >
            
              {(typeof weatherData.location != 'undefined') ? (
                    <WeatherDisplay weatherData={weatherData}/>
                  ): (
                    <div> No weather data</div>
              )}
            
          </Row >
          <Row className="getDir">
            <div style={{width: "100%", height: "auto", padding: "20px", backgroundColor: "#343a40"}}>
              <div style={{borderRadius: "10px", overflow: "hidden"}}>
                <GetDirections lat={lat} long={long}/>
              </div>
            </div>
            
            
          </Row>
          </div>
        </Col>

        </Row>

      </Container>
    
  )

}


export default ProfilePage;