import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { Link } from 'react-router-dom'
import PostMap from './PostMap'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Flippy, { FrontSide, BackSide } from 'react-flippy'



function PostProfile(props) {
  const userInfo = useContext(UserContext)
  const { header, content, post_city, post_state, type, img} = props.post
  

  function renderPosts() {

  
      return(
          <Container style={{paddingBottom: ".5rem"}}>
            <Row style={{paddingBottom: ".5rem"}}>
              <Col >

              <Link to={`/view-post/${props.post.id}`}>
              <Button variant="secondary" size="lg" block> View Post </Button>
              </Link>

              </Col>
              <Col>

              <Link to={`/edit-post/${props.post.id}`}>
                <Button variant="secondary" size="lg" block> Edit Post </Button>
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
                <h5>{post_city}, {post_state}</h5>
              </Col>


            
            </Row>

            <Row>
                <h6 style={{padding: "2vh"}}>{type}</h6>
              </Row>
              <Row>
                <h6 style={{padding: "2vh"}}>{content}</h6>
            </Row>

             
            </Col>
            

            <Col style={{padding: "0"}}>
              <Row className="imgProfPage">

          
                <img style={{width: "100%", minHeight: "100%"}} src={ img } alt={header}/> 
            
               
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
      <Flippy style={{paddingBottom: '1rem'}}>
        <FrontSide className="flippy">
          { renderPosts() }
        </FrontSide>
        <BackSide className="flippy">
        <PostMap post={props.post}/>
        </BackSide>
      </Flippy>
    </div>
  )
}

export default PostProfile;