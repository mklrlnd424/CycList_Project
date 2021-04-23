

function PostMap(props) {
    
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

