import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'



const GetDirections = (props) => {
  const MAP_URL = "https://www.google.com/maps/embed/v1/directions?key="
  const MAP_KEY = "AIzaSyBuXnOdpocA7_WBENeiWkLOY5lccv-szzk"

  const [destination, setDestination] = useState('')
  const [source, setSource] = useState(`${MAP_URL}${MAP_KEY}&origin=${props.lat},${props.long}&destination=${props.lat},${props.long}&mode=bicycling`)

  const handleSubmit = (e) => {
    e.preventDefault();
    setSource(`${MAP_URL}${MAP_KEY}&origin=${props.lat},${props.long}&destination=${destination}&mode=bicycling`)
  }
  
  
  return (
    <div >
      
      <iframe
        width="100%"
        height="250vh"
        frameBorder="0"
        marginWidth="0"
        src={source} allowFullScreen>
      </iframe>

      
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group size="lg" controlId="dest" style={{marginBottom: '.3rem'}}>
            <Form.Control
              type="dest"
              placeholder="destination"
              value={ destination }
              onChange={(e) => setDestination(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" variant="secondary" >
              Get Directions
          </Button>
      </Form>
    </div>
  )
}


export default GetDirections;