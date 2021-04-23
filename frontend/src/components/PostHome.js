import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import cyclistAPI from '../api/cyclistAPI'
import PostMap from './PostMap'

function PostHome(props) {
  // console.log(props)
  const userInfo = useContext(UserContext)
  const [usersData, getUsersData] = useState({})

  const {header, type, content, city, state, intersection1, intersection2, profile, user, img} = props.post

  // const GetUserData = async () => {
  //   let credentials = {
  //     token: userInfo.token,
  //     user: userInfo.user.username
  //   }
    
  //   let response = await cyclistAPI.GetUserData(credentials, user)
  //   getUsersData(response)
    
  // };

  // useEffect(() => {
  //   GetUserData();
  // }, [usersData]) 
  
  function renderPosts() {
    
                        
    return(
      <div>
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

export default PostHome;