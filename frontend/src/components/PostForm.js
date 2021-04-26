import { useState, useEffect, useContext } from 'react'
import cyclistAPI from '../api/cyclistAPI'
import UserContext from '../contexts/UserContext'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const PostForm = () => {
  let history = useHistory()
  const userInfo = useContext(UserContext)
  
  // handler for editing
  // if clicked on edit submit => set initial states to post state

  const [header, setHeader] = useState("")
  const [type, setType] = useState("")
  const [content, setContent] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [intersection1, setIntersection1] = useState("")
  const [intersection2, setIntersection2] = useState("")
  const [profileNo, setProfileNo] = useState(0)
  const [userNo, setUserNo] = useState(0)
  const [img, setImg] = useState("")
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    let credentials = {
      token: userInfo.token,
      user: userInfo.user.username
    }
    let postData = {
      "header": header,
      "type": type,
      "content": content,
      "city": city,
      "state": state,
      "intersection1": intersection1,
      "intersection2": intersection2,
      "profile": profileNo,
      "user": userNo
    }
      let data = await cyclistAPI.CreatePost(postData, credentials)
      if (data) {
      
        if (history) {
          history.push('/profile')
        }
      }
      
      
    }
    catch(error) {
      console.log(error)
      return {}
    }
  }

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
    });
    setUserNo(userInfo.user.id)
    setProfileNo(userInfo.user.profile.id)
  },[])

  
  console.log(header)
  console.log(type)
  console.log("Post Lat: ", lat)
  console.log("Post Long: ", long)
  return (
    <div>
      {/* <Link to={"/profile"}><button>Profile Page</button></Link>
      <Link to={"/home"}><button>Home Page</button></Link>
    <form onSubmit={e => { handleSubmit(e) }}>
      <label>Header</label>
      <br />
      <input name='header' type='text' value={header} onChange={e => setHeader(e.target.value)}/>
      <br/>
      <label>Type</label>
      <br />
        <select value={ type } onChange={e => setType(e.target.value)}>
          <option value=""></option>
          <option value="route">Trail Route</option>
          <option value="hazardous">Hazardous Conditions</option>
          <option value="other">Other</option>
        </select>
      <br />
      <label>Whats New?</label>
      <br />
      <textarea rows="5" cols="40" id='content' name='content' type='text' value={ content } onChange={e => setContent(e.target.value)}></textarea>
      <br />
      <label>City</label>
      <br />
      <input name='city' type='text' value={ city } onChange={e => setCity(e.target.value)}/>
      <br />
      <label>State</label>
      <br />

      <select value={ state } onChange={e => setState(e.target.value)}>
          <option value=""></option>
          <option value="alabama">Alabama</option>
          <option value="alaska">Alaska</option>
          <option value="arizona">Arizona</option>
          <option value="arkansas">Arkansas</option>
          <option value="california">California</option>
          <option value="colorado">Colorado</option>
          <option value="connecticut">Connecticut</option>
          <option value="washington_dc">Washington D.C.</option>
          <option value="delaware">Delaware</option>
          <option value="florida">Florida</option>
          <option value="georgia">Georgia</option>
          <option value="hawaii">Hawaii</option>
          <option value="illinois">Illinois</option>
          <option value="indiana">Indiana</option>
          <option value="iowa">Iowa</option>
          <option value="kansas">Kansas</option>
          <option value="louisiana">Louisiana</option>
          <option value="maine">Maine</option>
          <option value="maryland">Maryland</option>
          <option value="montana">Montana</option>
          <option value="nebraska">Nebraska</option>
          <option value="nevada">Nevada</option>
          <option value="new_hampshire">New Hampshire</option>
          <option value="new_jersey">New Jersey</option>
          <option value="new_mexico">New Mexico</option>
          <option value="new_york">New York</option>
          <option value="north_carolina">North Carolina</option>
          <option value="north_dakota">North Dakota</option>
          <option value="ohio">Ohio</option>
          <option value="oklahoma">Oklahoma</option>
          <option value="oregon">Oregon</option>
          <option value="pennsylvania">Pennsylvania</option>
          <option value="rhode_island">Rhode Island</option>
          <option value="south_carolina">South Carolina</option>
          <option value="south_dakota">South Dakota</option>
          <option value="tennessee">Tennessee</option>
          <option value="texas">Texas</option>
          <option value="utah">Utah</option>
          <option value="vermont">Vermont</option>
          <option value="virginia">Virginia</option>
          <option value="washington">Washington</option>
          <option value="wisconsin">Wisconsin</option>
          <option value="wyoming">Wyoming</option>
          
        
      </select>
      <br />
      <label>Intersection</label>
      <br />
      <input name='userName' type='text' value={ intersection1 } onChange={e => setIntersection1(e.target.value)}/> and 
      <input name='userName' type='text' value={ intersection2 } onChange={e => setIntersection2(e.target.value)}/>
      <br />
      <input className='submitButton' type='submit' value='Submit Post'/>
    </form> */}
        <Form style={{width: "100%", padding: "20px"}}>
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
            <option value="" disabled>Select One</option>
            <option value="route">Trail Route</option>
            <option value="hazardous">Hazardous</option>
            <option value="other">Other</option>
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

          <Form.Group controlId="header">
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


export default PostForm;