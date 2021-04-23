import { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'




function PostMap(props) {
  
  // console.log(props.post)
  // console.log(props.post.intersection1)
  // console.log(props.post.intersection2)
  // console.log(props.post.state)
  // console.log(props.post.city)
    return (
      <div>
        <iframe
            width="450"
            height="250"
            frameBorder="0" 
            style= {{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBuXnOdpocA7_WBENeiWkLOY5lccv-szzk&q=${props.post.intersection1}+and+${props.post.intersection2}+${props.post.city}+${props.post.state}`} allowFullScreen>
          </iframe>
      </div>
    )
}

export default PostMap;

