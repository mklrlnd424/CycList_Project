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
  </div>
  )
}



export default LoginPage;