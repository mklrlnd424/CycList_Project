import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'


const RegPage = () => {
  let history = useHistory()

  async function handleSignup(event) {

  }


  return( 
  <div className="formBox">
    <Form >
      <Form.Label style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Roboto'}}><h1>CycList</h1></Form.Label>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Pick a Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            placeholder="username"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Set Your Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

      
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

    
        <Form.Group size="lg" controlId="pic">
          <Form.Label>Profile Photo</Form.Label>
          <Form.Control
            type="pic"
            placeholder="upload your image"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Bio</Form.Label>
        <Form.Control as="textarea"
          placeholder="tell use about yourself"
          // value = { content }
          // onChange={e => setContent(e.target.value)}
          rows={3}
          />
      </Form.Group>

        <Form.Group>
      <Form.Label>Choose Your State</Form.Label>
      <Form.Control as="select"
        // value={ state }
        // onChange={e => setState(e.target.value)}
        >
        <option value="">Select One</option>
        <option value="Alabama">Alabama</option>
        <option value="Alaska">Alaska</option>
        <option value="Arizona">Arizona</option>
        <option value="Arkansas">Arkansas</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Washington_dc">Washington D.C.</option>
        <option value="Delaware">Delaware</option>
        <option value="Florida">Florida</option>
        <option value="Georgia">Georgia</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Illinois">Illinois</option>
        <option value="Indiana">Indiana</option>
        <option value="Iowa">Iowa</option>
        <option value="Kansas">Kansas</option>
        <option value="Louisiana">Louisiana</option>
        <option value="Maine">Maine</option>
        <option value="Maryland">Maryland</option>
        <option value="Montana">Montana</option>
        <option value="Nebraska">Nebraska</option>
        <option value="Nevada">Nevada</option>
        <option value="New_hampshire">New Hampshire</option>
        <option value="New_jersey">New Jersey</option>
        <option value="New_mexico">New Mexico</option>
        <option value="New_york">New York</option>
        <option value="North_carolina">North Carolina</option>
        <option value="North_dakota">North Dakota</option>
        <option value="Ohio">Ohio</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Oregon">Oregon</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="Rhode_island">Rhode Island</option>
        <option value="South_carolina">South Carolina</option>
        <option value="South_dakota">South Dakota</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Texas">Texas</option>
        <option value="Utah">Utah</option>
        <option value="Vermont">Vermont</option>
        <option value="Virginia">Virginia</option>
        <option value="Washington">Washington</option>
        <option value="Wisconsin">Wisconsin</option>
        <option value="Wyoming">Wyoming</option>
      </Form.Control>
      </Form.Group>

        <Form.Group size="lg" controlId="pic">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="pic"
              placeholder="upload your image"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        <Link to='/login'>
          <Button block size="lg" type="submit" variant="secondary" style={{marginBottom: "15px"}}>
            Login
          </Button>
        </Link>
      </Form>
  </div>
  )
}



export default RegPage;