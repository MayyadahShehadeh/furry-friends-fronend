import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './css/Header.css';
import LogoutButton from '../LogoutButton';
import LoginButton from '../LoginButton';
import { withAuth0 } from '@auth0/auth0-react';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.listener = null;
    this.state = {
      status: "top",
    };
  }
  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "") {
          this.setState({ status: "" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }
  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <>


        <Navbar

          fixed="top"
          variant="dark"
          className="navbar-header"
          id="mynav"
          style={{
            backgroundColor:
              this.state.status === "top"
                ? "rgba(255, 255, 255, 0.0)"
                : "rgba(255, 255, 255, 1)",
            boxShadow:
              this.state.status === "top"
                ? "0 8px 8px rgba(0, 0, 0, 0)"
                : "0 8px 8px rgba(0, 0, 0, 0.308)",
            transition: "1s",
          }}

        >

          <Navbar.Brand>Catsss
            {/* <Link to="/"><img src={logo} alt="imag" className="o2art-logo"/></Link> */}

          </Navbar.Brand>
          <Nav className="me-auto">
{/* 
            <Nav.Link href="#home">
              <Link to="/">Home</Link>
            </Nav.Link> */}
              <Link to="/">Home</Link>

            <Link to="/Main">Adopt Cat</Link>

            {this.props.auth0.isAuthenticated ? <Link to="/Profile">Profile</Link> : ''}
            <Link to="/">
              {this.props.auth0.isAuthenticated ? (
                <LogoutButton />
              ) : (
                <LoginButton />
              )}
            </Link>
          </Nav>
          {this.props.auth0.isAuthenticated &&
            <img alt="imag" className="header-user-pic" src={this.props.auth0.user.picture} />}
        </Navbar>


      </>
    )
  }
}

export default withAuth0(Header);