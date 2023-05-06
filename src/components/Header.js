import React, { Component } from 'react'
// import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import './css/Header.css';
import './css/bootstrap.min.css'
import './css/responsive.css'

import img1 from './images/logo.png';


import LogoutButton from '../LogoutButton';
import LoginButton from '../LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import { Nav, NavDropdown, Container, Navbar, Form, Button } from 'react-bootstrap';

export class Header extends Component {

  // constructor(props) {
  //   super(props);
  //   this.listener = null;
  //   this.state = {
  //     status: "top",
  //   };
  // }
  // componentDidMount() {
  //   this.listener = document.addEventListener("scroll", (e) => {
  //     var scrolled = document.scrollingElement.scrollTop;
  //     if (scrolled >= 120) {
  //       if (this.state.status !== "") {
  //         this.setState({ status: "" });
  //       }
  //     } else {
  //       if (this.state.status !== "top") {
  //         this.setState({ status: "top" });
  //       }
  //     }
  //   });
  // }
  // componentDidUpdate() {
  //   document.removeEventListener("scroll", this.listener);
  // }

  render() {


    return (
      <>
        <header>
          <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
              <Navbar.Brand href="/"><img src={img1} style={{ width: '50px', height: '50px' }} /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Main">Find Your Cat</Nav.Link>

                  <NavDropdown title="Adopt" id="navbarScrollingDropdown">

                    <NavDropdown.Item href="/AdoptionProcess">Adoption Process</NavDropdown.Item>

                    <NavDropdown.Item href="/CareAfterAdoption">Care After Adoption</NavDropdown.Item>

                    {/* <NavDropdown.Divider /> */}


                    {/* <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                  </NavDropdown>


                  {
                    this.props.auth0.isAuthenticated &&
                    <Nav.Link href="/Profile">Your Profile</Nav.Link>
                  }


                  {this.props.auth0.isAuthenticated &&
                    <img alt="imag" className="header-user-pic" src={this.props.auth0.user.picture} />}
                  <div style={{
                    position: 'absolute',
                    right: '190px'
                  }} >

                    {this.props.auth0.isAuthenticated ?
                      <LogoutButton /> :
                      <Nav.Link href="/Login"><span class="user_icon" >
                        <i class="fa fa-user" aria-hidden="true"></i></span>Login</Nav.Link>


                    }
                  </div>
                  <Nav.Link href="/ContactUs">Contact Us </Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
     
        {/* <br />
        <br /> */}

        {/* <div style={{ whiteSpace: 'nowrap' }}>

        <div>
          <div class="header_section">
            <div class="container-fluid">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/"><img src={img1} style={{width:'100px' , height:'100px'}}/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                    
            
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Main">Adopt Cat</a>
                     
                    </li>
                    <li class="nav-item">
                      {
                        this.props.auth0.isAuthenticated &&
                        <a class="nav-link" href="/Profile">Profile</a> 
                      }

                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/Main">Shop</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                    <div class="login_bt">
                      <ul>
                      {this.props.auth0.isAuthenticated ?
                          <LogoutButton />:
                          <a href="/Login"><span class="user_icon">   <i class="fa fa-user" aria-hidden="true"></i></span>Login</a>
                    } */}

        {/* <a href="http://localhost:5000/Login"><span class="user_icon"><i class="fa fa-user" aria-hidden="true"></i></span>Login</a> */}
        {/* <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li> */}
        {/* </ul>
                    </div>
                  </form>
                </div>
              </nav>
            </div>
          </div> */}

        {/* <!-- header section end --> */}

        {/* <Navbar

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

        > */}

        {/* <Navbar.Brand>Catsss */}
        {/* <Link to="/"><img src={logo} alt="imag" className="o2art-logo"/></Link> */}

        {/* </Navbar.Brand>
          <Nav className="me-auto"> */}
        {/* 
            <Nav.Link href="#home">
            <Link to="/">Home</Link>
          </Nav.Link> */}
        {/* 
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
 */}
        {/* </div>
            </div> */}
      </>
    )
  }
}

export default withAuth0(Header);