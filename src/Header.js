import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Main from './Main';
export class Header extends Component {
  render() {
    return (
      <>
      
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Navbar.Brand>Catsss</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/Main">Main</Link>
          {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */
          
    //   this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>
          }
      </Navbar>      
      
      </>
    )
  }
}

export default Header