import { useEffect, useState } from 'react';



const GetDirections = (props) => {
  const MAP_URL = "https://www.google.com/maps/embed/v1/directions?key="
  const MAP_KEY = "AIzaSyBuXnOdpocA7_WBENeiWkLOY5lccv-szzk"

  const [destLat, setDestLat] = useState(props.lat)
  const [destination, setDestination] = useState('')
  const [source, setSource] = useState(`${MAP_URL}${MAP_KEY}&origin=${props.lat},${props.long}&destination=${props.lat},${props.long}&mode=bicycling`)

  const handleSubmit = (e) => {
    e.preventDefault();
    setSource(`${MAP_URL}${MAP_KEY}&origin=${props.lat},${props.long}&destination=${destination}&mode=bicycling`)
  }
  
  console.log(destination)
  return (
    <div>

      <form onSubmit={e => handleSubmit(e)}>
        <input name='userName' type='text' value={ destination } onChange={e => setDestination(e.target.value)}/>
        <input className='submitButton' type='submit' value='Submit Post'/>
        
      </form>
      
      
      <iframe
        width="450"
        height="250"
        frameBorder="0"
        style= {{ border: 0 }}
        src={source} allowFullScreen>
      </iframe>
    </div>
  )
}


export default GetDirections;