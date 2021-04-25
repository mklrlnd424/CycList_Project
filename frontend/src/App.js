import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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



function App() {
  const [userInfo, setUser] = useState(null)

  function updateUserInfo(newUserInfo) {
    setUser(newUserInfo)
  }

 
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={ userInfo }>
        

            <div>
      
              <Route exact path="/login" render={() => <LoginPage handleLogin={ updateUserInfo } />} />
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