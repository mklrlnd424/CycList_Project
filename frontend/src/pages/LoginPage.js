import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import cyclistAPI from '../api/cyclistAPI'
import { Button, Form } from 'react-bootstrap'


const LoginPage = (props) => {
  let history = useHistory()

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin(event) {

    event.preventDefault()
    let credentials = {
      username: userName,
      password: password
      
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
  
  console.log(userName)
  console.log(password)
  return( 
  <div className="login">
    <Form onSubmit={handleLogin}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" variant="secondary">
          Login
        </Button>
      </Form>
    {/* <h2>Login</h2>
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
    <h3><Link to="/register">Register</Link></h3> */}
  </div>
  )
}



export default LoginPage;