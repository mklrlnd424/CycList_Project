import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import cyclistAPI from '../api/cyclistAPI'
import PostHome from '../components/PostHome'
import WeatherDisplay from '../components/WeatherDisplay'
import GetDirections from '../components/GetDirections'
import { Container, Row, Col, Button } from 'react-bootstrap'



const HomePage = () => {
  const userInfo = useContext(UserContext)
  const [posts, setPosts] = useState([])
  
  

  const GetPosts = async () => {
    let credentials = {
      token: userInfo.token,
      user: userInfo.user.username
    }
    
    let response = await cyclistAPI.GetPosts(credentials)
    setPosts(response)
    
  };


  useEffect(() => {
    GetPosts();
  }, []) 



  function renderHomePage() {
    

    if (userInfo && userInfo.user) {
      
      let postElements = posts.map((item, index) => {
        return <PostHome key={index} post={item} />
      })
      
      return (
        <div>
          <h2>You are logged in as <span className="user">{userInfo.user.username}</span><hr/></h2>
          { postElements }
        </div>
      )

    } else {
      
      return( 
        <div>
          <h1>Home Page</h1>
          <h2>You are not logged in</h2>
          <Link to="/login"><button>Login</button></Link>
          &nbsp;
          <Link to="/register"><button>Register</button></Link>
        </div>
      )
  
    }
  }

  // information for weather
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);


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
        setData(result)
      });
    }
    fetchData();
  }, [lat,long])

 
  return (
    <div>
      <Container >
          HomePage
          <Link to="/profile"><button>View Profile</button></Link>
          <Row>

            <Col style={{border: "1px solid"}}>
            { renderHomePage() }
            </Col>

            <Col style={{border: "1px solid"}}>
              <div className="sticky-top">

              <Row style={{border: "1px solid"}}>
                
                  {(typeof data.location != 'undefined') ? (
                        <WeatherDisplay weatherData={data}/>
                      ): (
                        <div> No weather data</div>
                  )}
                
              </Row >
              <Row style={{border: "4px solid", height: "50vh"}}>
                <div style={{border: "1px solid", width: "100%", height: "100%"}}>
                  <GetDirections lat={lat} long={long}/>
                </div>
                
                
              </Row>
              </div>
            </Col>

        </Row>
      </Container>
     
     
    </div>
  )

}


export default HomePage;