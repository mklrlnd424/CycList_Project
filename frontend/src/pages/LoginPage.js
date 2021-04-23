import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import cyclistAPI from '../api/cyclistAPI'


const LoginPage = (props) => {
  let history = useHistory()

  async function handleLogin(event) {
    event.preventDefault()
    let credentials = {
      username: event.target.username.value,
      password: event.target.password.value
      
    }
    let data = await cyclistAPI.login(credentials) 
      if (data.token) {
        let userInfo = {
          token: data.token,
          user: data.user
        }
        
        props.handleLogin(userInfo)
        
        if (history) {
          history.push("/home")
        } 
        
      }
  
  }
  
  return( 
  <div>
    <h2>Login</h2>
    <form onSubmit={ handleLogin }>
      <div className="form">

        <label className="form-label" htmlFor="username">Username: </label>
        <input className="form-input" name="username" type="text" placeholder="username"></input>

        <label className="form-label" htmlFor="password">Password: </label>
        <input className="form-input" name="password" type="text" placeholder="password"></input>

        <button className="form-button" type="submit">Login</button>
      </div>
    </form>
      <br />
    <h3><Link to="/register">Register</Link></h3>
  </div>
  )
}



export default LoginPage;