import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { Link, useHistory } from 'react-router-dom'
import PostMap from './PostMap'
import PostPage from '../pages/PostPage'
import cyclistAPI from '../api/cyclistAPI'
import Post from './Post'



function PostProfile(props) {
  const userInfo = useContext(UserContext)
  let history = useHistory()
  const { header, city, content, intersection1, intersection2, state, type, img} = props.post
  

  function renderPosts() {

  
      return(
        <div>
          <Link to={`/view-post/${props.post.id}`}><button>View Post</button></Link>
          <Link to={`/edit-post/${props.post.id}`}><button>Edit Post</button></Link>
          <br/>
          <img style={{ height: "200px"}}src={userInfo.user.profile.prof_pic} alt={userInfo.user.username}/>
          <p>Subject: {header}</p>
          <p>Type: {type}</p>
          <p>Body: {content}</p>
          <p>City: {city}, {state}</p>
          <p>Intersection: {intersection1} and {intersection2}</p>
          <img style={{ height: "200px"}}src={img} alt={header}/>
          <PostMap post={props.post}/>
          <hr/>
        </div>
      )
   
  }

  
  return (
    <div>
      { renderPosts() }
    </div>
  )
}

export default PostProfile;