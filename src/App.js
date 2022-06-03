import React, { useContext, useEffect } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

import {FirebaseContext} from './Firebase/FirebaseContext';
import {AuthContext} from './store/Context'
import Post from './store/PostContext';

import Home from './Pages/Home';
import CreatePage from './Pages/Create';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import ViewPost from './Pages/ViewPost';

function App() {
  const {firebase} = useContext(FirebaseContext);
  const {user,setUser} = useContext(AuthContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user=>{
      setUser(user);
    })
  })
  
  return (
    <div>
      <Post>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/create'>
            <CreatePage />
          </Route>
          <Route path='/view'>
            <ViewPost />
          </Route>
        </Router>
      </Post>
      
    </div>
  );
}

export default App;
