import { useState } from 'react'

function PostMap(props) {
    
    const [correctLat, setCorrectLat] = useState("41.953640")
    const [correctLong, setCorrectLong] = useState("87.654900")


    
    // geolocator returning negative longitude? correction put in, will only work in positive lat/long regions 

    // useEffect(() => {
      
    //   if(parseInt(props.post.longitude) < 0) {
    //     setCorrectLong(String(parseFloat(props.post.longitude)*-1))
        
    //   } else {
    //     setCorrectLong(props.post.longitude)
    //   }

    // }, [])

    // console.log("corrected long, ", correctLong)
    return (
        <iframe
            width="100%"
            height="100%"
            frameBorder="0" 
            src={`https://maps.google.com/maps?q=${correctLat}N,${correctLong}W&hl=es;z=14&output=embed`} allowFullScreen>
          </iframe>

    )
}

export default PostMap;

