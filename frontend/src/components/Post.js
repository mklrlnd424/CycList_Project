import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import cyclistAPI from '../api/cyclistAPI'
import PostMap from '../components/PostMap'
import { Container, Row, Col, Button } from 'react-bootstrap'


const Post = (props) => {

  
  let history = useHistory()
  const userInfo = useContext(UserContext)
  const [post, setPost] = useState([])
  // const classes = useStyles()
  
  
 
  console.log(props.post.match.params.postID)
  const GetPost = async () => {
    let credentials = {
      token: userInfo.token,
      user: userInfo.user.username,
    }
    
    let postID = props.post.match.params.postID   
    let response = await cyclistAPI.GetPostById(credentials, postID)
    
    setPost(response)
    
  };

  useEffect(() => {
    GetPost();
  }, [])

 
  async function handleDelete() {
    let credentials = {
      token: userInfo.token,
      user: userInfo.user.username,
    }
    let postData = post
    let response = await cyclistAPI.DeletePost(postData, credentials)
    if (response) {
    
      if (history) {
        history.push('/profile')
      }
    }
  }

  console.log("these are the current img:", post.img)
  return(
  
  <div>

  <Container >
    <Row style={{margin: "10px 0 10px 0"}}>
      <Col>
      <Link to={`/profile`}>
        <Button variant="primary" size="lg" block>
          Profile
        </Button>
      </Link>
      </Col>
      <Col>
      <Link to={`/edit-post/${props.post.match.params.postID}`}>
        <Button variant="primary" size="lg" block>
        Edit Post
        </Button>
      </Link>
        </Col>
        <Col>
        <Button onClick={ handleDelete } variant="primary" size="lg" block>
        Delete Post
      </Button>
      </Col>
    </Row>
    </Container>

    <Container >

  <Row style={{height: "40vh"}}>

    <Col  className="imgPost">
        <img style={{height: "300px"}} src={ post.img } alt={post.header}/>    
    </Col>

    <Col className="contentBackground">

      <Row >
        <div style={{paddingTop: "1vh"}}>

        <Col >
          <div className="profImgWrapper">
           <img className="profImg" src={userInfo.user.profile.prof_pic} alt={userInfo.user.username}/>
          </div>
        </Col>
        </div>
        <Col >
          <h4 style={{paddingTop: "1vh"}}>{post.header}</h4>
          <h5 >{post.city}, {post.state}</h5>
        </Col>

      </Row>

      <Row>
          <h6 style={{padding: "1vh"}}>{post.type}</h6>
          <h6 style={{padding: "1vh"}}>{post.content}</h6>
      </Row>

    </Col>
        

      <Col style={{paddingLeft: "0", borderRadius: "0 5% 5% 0", overflow: "hidden"}}>
        <PostMap post={post}/>
      </Col>
  </Row>
    </Container>
  </div>


      
  
  )
  
  
}



export default Post;