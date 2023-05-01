import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Home from './components/Home';
// import Login from './Login';
import { withAuth0 } from "@auth0/auth0-react";
import Profile from './Profile';
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>

            <Route exact path="/"
              element={<Home />}>
            </Route>

            <Route
              exact path="/Main"
              element={<Main />}>
            </Route>

            <Route
              exact path="/Profile"
              element={this.props.auth0.isAuthenticated && <Profile />}
             >
            </Route>
            
          </Routes>
          {/* <Footer /> */}
        </Router >
      </>
    )
  }
}

// export default withAuth0(App);
export default withAuth0(App);