import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import cyclistAPI from '../api/cyclistAPI'
import PostHome from '../components/PostHome'
import GetWeather from '../components/GetWeather'
import GetDirections from '../components/GetDirections'



const HomePage = () => {
  const userInfo = useContext(UserContext)
  const [posts, setPosts] = useState([])
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  
  useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat,long])
  

  console.log("lat: ", lat)
  console.log("long: ", long)

  
  const GetPosts = async () => {
    let credentials = {
      token: userInfo.token,
      user: userInfo.user.username
    }
    
    let response = await cyclistAPI.GetPosts(credentials)
    setPosts(response)
    
  };


  useEffect(() => {
    GetPosts();
  }, []) 

 
  function renderHomePage() {
    

    if (userInfo && userInfo.user) {
      
      let postElements = posts.map((item, index) => {
        return <PostHome key={index} post={item} />
      })
      
      return (
        <div>
          <h2>You are logged in as <span className="user">{userInfo.user.username}</span><hr/></h2>
          { postElements }
        </div>
      )

    } else {
      
      return( 
        <div>
          <h1>Home Page</h1>
          <h2>You are not logged in</h2>
          <Link to="/login"><button>Login</button></Link>
          &nbsp;
          <Link to="/register"><button>Register</button></Link>
        </div>
      )
  
    }
  }

  console.log(posts)
  return (
    <div>
      <GetDirections lat={lat} long={long}/>
      <GetWeather />
      HomePage
      <Link to="/profile"><button>View Profile</button></Link>
      { renderHomePage() }
      <p></p>
    </div>
  )

}


export default HomePage;