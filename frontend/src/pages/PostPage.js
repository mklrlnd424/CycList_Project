import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import cyclistAPI from '../api/cyclistAPI'
import PostMap from '../components/PostMap'
import Post from '../components/Post'


const PostPage = (props) => {

  return(
  <div>
    <Post post={props}/>
  </div>
  )
  
  
}


export default PostPage;
