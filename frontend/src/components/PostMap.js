

function PostMap(props) {
    
    return (
        <iframe
            width="100%"
            height="100%"
            frameBorder="0" 
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBuXnOdpocA7_WBENeiWkLOY5lccv-szzk&q=${props.post.intersection1}+and+${props.post.intersection2}+${props.post.city}+${props.post.state}`} allowFullScreen>
          </iframe>

    )
}

export default PostMap;

