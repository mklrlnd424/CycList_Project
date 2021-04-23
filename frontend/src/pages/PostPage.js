import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import cyclistAPI from '../api/cyclistAPI'
import PostMap from '../components/PostMap'


const PostPage = (props) => {
  let history = useHistory()
  const userInfo = useContext(UserContext)
  const [post, setPost] = useState([])

  // gets post for user
  const GetPost = async () => {
    let credentials = {
      token: userInfo.token,
      user: userInfo.user.username,
    }
    let postID = 2
    
    let response = await cyclistAPI.GetPostById(credentials, postID)
    
    setPost(response)
    
  };

  useEffect(() => {
    GetPost();
  }, [])

  // deletes post from user profile
  async function handleDelete() {
    let credentials = {
      token: userInfo.token,
      user: userInfo.user.username,
    }
    let postData = post
    let response = await cyclistAPI.DeletePost(postData, credentials)
    if (response) {
      if (history) {
        history.push('/profile')
      }
    }
  }


  return(
  <div>
    {/* <Link to={`/edit-post/${post.id}`}><button>Edit Post</button></Link> */}
    <button onClick={ handleDelete }>Delete Post</button>
      <br/>
      <img style={{ height: "200px"}}src={userInfo.user.profile.prof_pic} alt={userInfo.user.username}/>
        <p>Subject: {post.header}</p>
        <p>Type: {post.type}</p>
        <p>Body: {post.content}</p>
        <p>City: {post.city}, {post.state}</p>
        <p>Intersection: {post.intersection1} and {post.intersection2}</p>
        <img style={{ height: "200px"}}src={post.img} alt={post.header}/>
        <PostMap post={post}/>
      <hr/>
  </div>
  )
  
  
}


export default PostPage;
