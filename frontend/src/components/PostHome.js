import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import cyclistAPI from '../api/cyclistAPI'
import PostMap from './PostMap'
import { Container, Row, Col, Button } from 'react-bootstrap'

function PostHome(props) {
  // console.log(props)
  const userInfo = useContext(UserContext)
  const [usersData, getUsersData] = useState({})

  const {id, header, type, content, city, state, intersection1, intersection2, profile, user, img} = props.post

  
  function renderPosts() {
    
                        
    return(
      
      <Container style={{paddingBottom: "10vh"}}>
      <Row style={{margin: "10px 0 10px 0"}}>
              <Col >

              <Link to={`/view-post/${id}`}>
              <Button variant="primary" size="lg" block> View Post </Button>
              </Link>

              </Col>
              <Col>

              <Link to={`/edit-post/${id}`}>
                <Button variant="primary" size="lg" block> Edit Post </Button>
              </Link>

              </Col>
            </Row>
            <Row>

            
            <Col className="contentBackgroundProf">
            <Row >
              <div style={{paddingTop: "1vh"}}>

              <Col>
                <div className="profImgWrapper">
                <img className="profImg" src={userInfo.user.profile.prof_pic} alt={userInfo.user.username}/>
                </div>
              </Col>
              </div>
              <Col >
                <h4 style={{paddingTop: "1vh"}}>{userInfo.user.username}</h4>
                <h5 style={{}}>{city}, {state}</h5>
              </Col>


            
            </Row>

            <Row>
                <h6 style={{padding: "2vh"}}>{type}</h6><br/>
                <h6 style={{padding: "2vh"}}>{content}</h6>
            </Row>

             
            </Col>
            

            <Col style={{padding: "0"}}>
              <Row className="imgProfPage">

          
                <img style={{width: "100%", height: "100%"}} src={ img } alt={header}/> 
            
               
              </Row>
              <Row className="mapProfPage">
              <PostMap post={props.post}/>
              </Row>
              
            </Col>

            </Row>


      </Container>
     
          
    )
  }

  return (
    <div>
      { renderPosts() }
    </div>
  )
}

export default PostHome;