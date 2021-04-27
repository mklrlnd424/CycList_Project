import { useEffect, useState } from 'react'

function PostMap(props) {
    console.log(props)
    console.log(props.post.latitude)
    console.log(props.post.longitude)
    const [correctLong, setCorrectLong] = useState("")

    useEffect(() => {
      
      if(parseInt(props.post.longitude) < 0) {
        setCorrectLong(String(parseFloat(props.post.longitude)*-1))
  
      } else {
        setCorrectLong(props.post.longitude)
      }
    }, [])

    console.log("corrected long, ", correctLong)
    return (
        <iframe
            width="100%"
            height="100%"
            frameBorder="0" 
            src={`https://maps.google.com/maps?q=${props.post.latitude}N,${correctLong}W&hl=es;z=14&output=embed`} allowFullScreen>
          </iframe>

    )
}

export default PostMap;

