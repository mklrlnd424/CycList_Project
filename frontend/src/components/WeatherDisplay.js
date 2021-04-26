import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'


const WeatherDisplay = (props) => {
  const [icon, setIcon] = useState("")
  const [weatherData, setWeatherData] = useState([])
  
  const WEATHER_API_URL = 'http://api.weatherapi.com/v1/current.json?key='
  const WEATHER_API_KEY = 'f39d610ee89543c0ad2210538212204'

  
  
    console.log("Weather Information: ", props)
  return (
    
    <Container className="sticky-top" style={{border: '1px solid'}}>

        <Row style={{border: '1px dashed'}}>
          <Col style={{border: '1px dashed'}}>
            <Row style={{border: '1px dashed'}}>
            <h6>Temp { props.weatherData.current.temp_f }</h6> <br/>
            </Row>
            <Row style={{border: '1px dashed'}}>
            <h6>Feels Like { props.weatherData.current.temp_f }</h6>
            </Row>
          </Col>
          <Col className="widget" xs={2} style={{border: '1px dashed'}}>
          <img style={{height: "100%"}} src={ props.weatherData.current.condition.icon } alt={ props.weatherData.current.condition.text }/> 
          </Col>
        </Row>
        
      <Row style={{border: '1px dashed'}}>
      stuff and things
      </Row>
      <Row style={{border: '1px dashed'}}>
      stuff and things
      </Row>
      <Row style={{border: '1px dashed'}}>
      stuff and things
      </Row>
    </Container>

  )
}

export default WeatherDisplay;