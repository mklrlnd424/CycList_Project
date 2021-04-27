import { Spinner } from 'react-bootstrap'

const LoadWeatherData = () => {
  return(
    <div className="loadingBox">
        <Spinner animation="border" variant="light" />&emsp; 
        <h3>Gathering Weather Data</h3>&emsp;
        <Spinner animation="border" variant="light" /> 
    </div>
  )
}


export default LoadWeatherData;