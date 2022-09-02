import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: "SET_USER",
        user: user
      })
    })
  }, [])
  
  

  return (
    <Router>
      <Switch>
        { !user ? (<Login/>) : (
          <div className="App">
            <div className = "app__body">
              {/* Sidebar */}
              <Sidebar/>
              <Route exact path = "/">
                {/* Chat */}
                <Chat/>
              </Route>
              <Route path = "/room/:roomId">
                <Chat/>
              </Route>
            </div>
          </div>

        ) }
      </Switch>
    </Router>
  );
}

export default App;
