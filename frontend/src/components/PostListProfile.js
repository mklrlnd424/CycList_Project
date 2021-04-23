import { Link } from 'react-router-dom'
import PostPage from '../pages/PostPage'



function PostListProfile(props) {
  
  function renderPosts() {
    
                        
    return(
      <div>
        <Link to="/create-post"><button>Create a Post</button></Link>
        <Link to={`/view-post/${props.post.id}`}><button>View Post</button></Link>
        <Link to={`/edit-post/${props.post.id}`}><button>Edit Post</button></Link>
        <PostPage post={props}/>
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

export default PostListProfile;