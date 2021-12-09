import React from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import {useStateValue} from './StateProvider';

// for react router
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

 // pulling data from datalayer: state provider and reducer
  const [{user}, dispatch] = useStateValue();

  return (
    //BEM naming convention
    <div className="app">
      <Router>
        {/*if no logged in user, display login page, else display everything */}
        {!user ? (
          <Login />
        ) : (
          // in react it is empty div for no error
          <>
          <Header />
          
          <div className="app__body">
            <Sidebar />
            {/* this is space shown after clicking the menu from sidebar */}
            
            <Routes>
              <Route exact path="/room/:roomId" element={<Chat/>}>
              </Route>
              <Route exact path="/" element={<h1>Welcome</h1>}>
              </Route>
            </Routes>
          
          </div>
          </>
          ) }
      </Router>
    </div>
  );
}

export default App;
