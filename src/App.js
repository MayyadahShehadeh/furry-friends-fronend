import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Main from './Main';
import Home from './Home';
// import Footer from './Footer';

// import { withAuth0 } from "@auth0/auth0-react";

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
              element= {<Home />}
              >
                </Route>
          {/* <Route exact path="/" 
              element={ 
                this.props.auth0.isAuthenticated ? <BestBooks/> : <Login/>}> 
                </Route> */}
          <Route 
              exact path="/Main"
              element={<Main/>}
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
export default App;