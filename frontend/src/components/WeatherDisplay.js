import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'



const WeatherDisplay = (props) => {
  const hazard_codes = [1237, 1246, 1282, 1261, 1117]
  const visibility_codes = [1135, 1117, 1147]
  const rain_codes = [1030, 1063, 1072, 1150, 1153, 1168, 1180, 1171, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1204, 1240, 1243, 1246, 1249, 1252, 1273, 1276]

  const snow_codes = [1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1282, 1279]
  
  
  

  
  
    console.log("Weather Information: ", props)
  return (
          <Accordion defaultActiveKey="0" style={{width: "100%", paddingBottom: "1rem"}}>
            <Card className="Roboto" style={{borderRadius: "20px 20px 0 0"}}>
            <Accordion.Toggle as={Card.Header} eventKey="0" className="centered" >
            
             Check the Weather in Your Area!

          
            </Accordion.Toggle>
              <Accordion.Collapse eventKey="0" className="collapse">
                <Card.Body >

                  <Container >
                    <Row>

                    <Col >
                      <Row className="weatherDiv">
                        { props.weatherData.current.condition.text }
                      </Row>
                      <Row className="weatherDiv">
                        Temperature:  { props.weatherData.current.temp_f }
                      </Row>
                      <Row className="weatherDiv">
                        Wind: {props.weatherData.current.wind_mph}mph  {props.weatherData.current.wind_dir}
                      </Row>
                      <Row className="weatherDiv">
                        Wind Direction:  {props.weatherData.current.wind_degree}&deg; {props.weatherData.current.wind_dir}
                      </Row>
                    </Col>
                    <Col xs={4} className="iconCont" >
                      <img style={{height: "100%"}} src={ props.weatherData.current.condition.icon } alt={ props.weatherData.current.condition.text }/>
                    </Col>
                    </Row>
                    
                    <Row className="weatherDiv">
                        Humidity: {props.weatherData.current.humidity}
                    </Row>
                    <Row className="weatherDiv">
                        UV Index: {props.weatherData.current.uv}
                    </Row>


                  </Container>

                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="Roboto" style={{borderRadius: "0 0 20px 20px"}}>
              <Accordion.Toggle as={Card.Header} eventKey="1" className="centered">
                Tips Planning Your Ride!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1" className="collapse">
                <Card.Body>
                  <Container>
                    <Row className="weatherDiv">
                        Have a safe ride!
                    </Row>
                    {
                    props.weatherData.current.is_day === 0 && <Row className="weatherDiv">
                    It's dark out - Make sure your lights are mounted and working
                  </Row>
                    }
                    {
                    visibility_codes.includes(props.weatherData.current.condition.code) && <Row className="weatherDiv">
                    Low visibility, be aware of your surroundings
                  </Row>
                    }
                    {
                    rain_codes.includes(props.weatherData.current.condition.code) && <Row className="weatherDiv">
                    Bring a rain jacket
                  </Row>
                    }
                    {
                    snow_codes.includes(props.weatherData.current.condition.code) && <Row className="weatherDiv">
                    It's snowing out, be careful
                  </Row>
                    }
                    {
                    hazard_codes.includes(props.weatherData.current.condition.code) && <Row className="weatherDiv">
                    I do not recommend riding your bike in these conditions
                  </Row>
                    }
                    {
                    props.weatherData.current.temp_f <= 60 && <Row className="weatherDiv">
                    Bring a warm jacket
                  </Row>
                    }
                    {
                    props.weatherData.current.temp_f <= 45 && <Row className="weatherDiv">
                    Wear your coat
                  </Row>
                    }
                    {
                    props.weatherData.current.temp_f <= 45 && <Row className="weatherDiv">
                    Bring some gloves
                  </Row>
                    }

                  {
                    props.weatherData.current.wind_mph >= 15 && <Row className="weatherDiv">
                    Its windy out there, be mindful of your surroundings
                </Row>
                  }
                  {
                    props.weatherData.current.uv >= 3 && <Row className="weatherDiv">
                    The UV index is getting high, wear sunblock
                </Row>
                  }

                  </Container>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
      </Accordion>

  )
}

export default WeatherDisplay;