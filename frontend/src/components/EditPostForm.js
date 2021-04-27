import { useState, useEffect, useContext } from 'react'
import cyclistAPI from '../api/cyclistAPI'
import UserContext from '../contexts/UserContext'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const EditPostForm = (props) => {
  
  console.log(props)

  let history = useHistory()
  const userInfo = useContext(UserContext)
  
  // handler for editing
  // if clicked on edit submit => set initial states to post state
  const [header, setHeader] = useState()
  const [type, setType] = useState()
  const [content, setContent] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [img, setImg] = useState()
  
  useEffect(() => {
    setHeader(props.post.header)
    setType(props.post.type)
    setContent(props.post.content)
    setImg(props.post.img)
    setLat(props.post.latitude)
    setLong(props.post.longitude)
    setCity(props.post.post_city)
    setState(props.post.post_state)
  },[props.post])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let credentials = {
        token: userInfo.token,
        user: userInfo.user.username
      }
      let postData = {
        "id": props.post.id,
        "header": header,
        "type": type,
        "content": content,
        "post_city": city,
        "post_state": state,
        "latitude": lat,
        "longitude": long,
        "create_date": props.post.create_date,
        "profile": props.post.profile,
        "user": props.post.user
      }
        let data = await cyclistAPI.UpdatePost(postData, credentials)
        if (data) {
          console.log(data)
          if (history) {
            history.push(`/profile`)
          }
        }
      
    }
    catch(error) {
      console.log(error)
      return {}
    }
  }

  return (
    <div>
    <Form style={{width: "100%", padding: "20px"}} onSubmit={e => { handleSubmit(e) }}>
      <Form.Group controlId="header">
        <Form.Label>Post Subject</Form.Label>
        <Form.Control 
        type="header" 
        placeholder="Enter Subject"
        value={ header }
        onChange={(e) => setHeader(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
      <Form.Label>Post Type</Form.Label>
      <Form.Control as="select"
        value={ type }
        onChange={e => setType(e.target.value)}
        >
       
        <option value="Route">Trail Route</option>
        <option value="Hazardous">Hazardous</option>
        <option value="Other">Other</option>
      </Form.Control>
      </Form.Group>
      
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Post Content</Form.Label>
        <Form.Control as="textarea"
          placeholder="Enter Content"
          value = { content }
          onChange={e => setContent(e.target.value)}
          rows={3}
          />
      </Form.Group>
      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control 
        type="city" 
        placeholder="City"
        value={ city }
        onChange={(e) => setCity(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
      <Form.Label>State</Form.Label>
      <Form.Control as="select"
        value={ state }
        onChange={e => setState(e.target.value)}
        >
        <option value="" disabled>Select One</option>
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
     

      <Form.Group controlId="pic">
        <Form.Label>Post Image</Form.Label>
        <Form.Control 
        type="pic" 
        placeholder="Upload Image"
        value={ img }
        onChange={(e) => setImg(e.target.value)}
        />
      </Form.Group>

      <Button variant="secondary" type="submit" block>
        Submit
      </Button>
  </Form>
</div>
  )
}


export default EditPostForm;