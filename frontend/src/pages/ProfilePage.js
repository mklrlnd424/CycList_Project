import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import cyclistAPI from '../api/cyclistAPI'
import PostListProfile from '../components/PostListProfile'
import PostPage from '../components/PostListProfile'


const ProfilePage = () => {
  const userInfo = useContext(UserContext)
  const [data, setData] = useState([])

  
  const GetUserPosts = async () => {
    let credentials = {

      token: userInfo.token,
      user: userInfo.user.username,
      userID: userInfo.user.id
    }
    
    let response = await cyclistAPI.GetUserPosts(credentials)
    
    setData(response)
    
  };

  useEffect(() => {
    GetUserPosts();
  }, [])



  function renderProfilePage() {
  
    if (userInfo && userInfo.user) {
     
      let postElements = data.map((item, index) => {
        return <PostListProfile key={index} post={item} />
      })

      return (
        <div>
          <h2>You are logged in as <span className="user">
          {userInfo.user.username}</span></h2>
          
          <hr/>
          { postElements }
        </div>
      )

    } else {

      return( 
        <div>
          <h1>Profile Page</h1>
          <h2>You are not logged in</h2>
          <Link to="/login"><button>Login</button></Link>
          &nbsp;
          <Link to="/register"><button>Register</button></Link>
        </div>
      )
  
    }

  }
  
  return (
    <div>
      Profile Page
      <Link to="/home"><button>Home Page</button></Link>
      { renderProfilePage() }
    </div>
  )

}


export default ProfilePage;