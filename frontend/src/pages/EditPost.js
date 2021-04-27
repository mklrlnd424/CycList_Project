import PostForm from '../components/PostForm'
import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import cyclistAPI from '../api/cyclistAPI'
import EditPostForm from '../components/EditPostForm'


const EditPost = (props) => {
  const userInfo = useContext(UserContext)
  const [post, setPost] = useState([])

  console.log(props.match.params.postID)

  const GetPost = async () => {
    let credentials = {
      token: userInfo.token,
      user: userInfo.user.username,
    }
    let postID = props.match.params.postID
    
    let response = await cyclistAPI.GetPostById(credentials, postID)
    
    setPost(response)
    
  };

  useEffect(() => {
    GetPost();
  }, [])

  

  return (
    <div className="formBox">
      <EditPostForm post={post}/>
    </div>
  )
}
  


export default EditPost;