import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, useHistory } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'

// Pages
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

// Contexts
import UserContext from './contexts/UserContext'

// Components 
import NavBar from './components/Navbar'



function App() {
  const [userInfo, setUser] = useState(null)
  let history = useHistory

  function updateUserInfo(newUserInfo) {
    setUser(newUserInfo)
  }

  console.log(userInfo)
  return (
    <div className="App">
      
      <BrowserRouter>
        <UserContext.Provider value={ userInfo }>
              <Route exact path="/login" render={() => <LoginPage handleLogin={ updateUserInfo } />} />
          

            <div>
            {
              userInfo !== null && <NavBar />
            } 
              {/* <Route exact path="/logout" render={() => <LogoutPage handleLogin={ updateUserInfo } />} /> */}
              <Route exact path="/register" render={() => <RegPage />} />
              <Route exact path="/home" render={() => <HomePage handleLogin={ updateUserInfo } />} />
              <Route exact path="/profile" render={() => <ProfilePage />} />
              <Route exact path="/create-post" render={() => <CreatePost />} />
              <Route exact path="/edit-post/:postID" render={(routeProps) => <EditPost {...routeProps}/>} />
              <Route exact path="/view-post/:postID" render={(routeProps) => <PostPage {...routeProps}/>} />
          
            </div>

          
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;