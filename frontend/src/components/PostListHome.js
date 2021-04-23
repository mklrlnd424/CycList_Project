

function PostListHome(props) {
  
  function renderPosts() {
    
                        
    return(
      <div>
        <p>{props.post.header}</p>
        <p>{props.post.type}</p>
        <p>{props.post.content}</p>
        <p>{props.post.intersection1} and {props.post.intersection2}</p>
        <p>{props.post.city}, {props.post.state}</p>
        <hr/>
      </div>
    )
  }

  // console.log(props)
  return (
    <div>
      { renderPosts() }
    </div>
  )
}

export default PostListHome;