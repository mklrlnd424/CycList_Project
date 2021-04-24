import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import cyclistAPI from '../api/cyclistAPI'
import PostMap from '../components/PostMap'

// styling
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  main: {
  
    background: 'lightblue',
    alignContent: 'center',
    justifyContent: 'center',
  },
  postContainer: {
    width: '80vw',
    height: '40vh',
    margin: '0 auto',
    float: 'none',
    display: 'flex',
    border: '1px solid',
  },
  mapContainer: {
    border: '1px solid',
    flex: '1',
  },
  contentContainer: {
    border: '1px solid',
    flex: '1',
  },
  subject: {
    
    display: 'flex',
    border: '1px solid',
  },
  profImgContainer: {
    flex: '1',
    border: '1px solid',
    
  },
  profImg: {
    height: "100px", 
    borderRadius: "50%", 
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headerContainer: {
    margin: '10px',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    flex: '4',
    border: '1px solid',
  },
  postContents: {

  },
  imgContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imgPost: {
    
    border: '1px solid',
    height: '100%'
  }
});


const Post = (props) => {

  
  let history = useHistory()
  const userInfo = useContext(UserContext)
  const [post, setPost] = useState([])
  const classes = useStyles()
  
  
 
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
  <div className={classes.main}>
      <div className={classes.postContainer}>
          <div className={classes.imgContainer}>
            <img className={ classes.imgPost } src={ 'https://static.thenounproject.com/png/688285-200.png' } alt={post.header}/>
          </div>

          <div className={classes.contentContainer}>

            <div className={classes.subject}>

              <div className={classes.profImgContainer}>
                <img className={classes.profImg} src={userInfo.user.profile.prof_pic} alt={userInfo.user.username}/>
              </div>
              <div className={classes.headerContainer}>
                <h2>{post.header}</h2>
              </div>
            </div>
            <div>
              <p></p>
            </div>

            <div>
              <h4></h4>
              <h4>{post.type}</h4>
              <h4>{post.content}</h4>
              <h4>{post.city}, {post.state}</h4>
            </div>
            
          </div>


          <div className={classes.mapContainer}>
            <PostMap post={post}/>
          </div>
          
      {/* <button onClick={ handleDelete }>Delete Post</button>
        <Link to={`/edit-post/${props.post.match.params.postID}`}><button>Edit Post</button></Link>
        <br/> */}
        {/* <img style={{ height: "200px"}}src={userInfo.user.profile.prof_pic} alt={userInfo.user.username}/> */}
          {/* <p>Subject: {post.header}</p> */}
          {/* <p>Type: {post.type}</p>
          <p>Body: {post.content}</p>
          <p>City: {post.city}, {post.state}</p>
          <p>Intersection: {post.intersection1} and {post.intersection2}</p> */}
          
          {/* <img style={{ height: "200px"}} src={ `${post.img}` } alt={post.header}/> */}
          
      </div>
        
 
      
  </div>
  )
  
  
}



export default Post;