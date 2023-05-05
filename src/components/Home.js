import React, { Component } from 'react'
// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
// import './css/bootstrap.min.css'
// import './css/responsive.css'
// import Carousel from 'react-bootstrap/Carousel';
import image2 from './images/3858438.jpg'
import "./css/styles2.css";
import { Col, Row, Nav, Button } from 'react-bootstrap';
import img1 from './images/logo.png'
import Carouse from './Carouse'
import { MDBRipple } from 'mdb-react-ui-kit'
import axios from 'axios';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      catsDataaa: [],
      catDescreption: [],
      newData:[]

    }
  }

  componentDidMount = async () => {

    let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCats2`);
    let catsDesc = await axios.get(`${process.env.REACT_APP_SERVER}/getCatsDes`);


    console.log('descccc', catsDesc);

    this.setState({
      catsDataaa: catsData.data,
      catDescreption: catsDesc.data

    })
//     console.log('all 222', this.state.catDescreption);
// if(this.state.catsDataaa.catName == this.state.catDescreption.catName ){
//   let catDat2 = [...this.state.catsDataaa,...this.state.catDescreption.description] 
// }
// this.setState({
//   newData:catDat2
// })
// console.log('all newwwwww', this.state.newData);

  }

  render() {
    return (
      <>
        <Carouse />


        {/* ----------------------------------------------- */}
        <br /> <br /><br />
        <div class="containerr">
          <h2 class="title">
            <span class="title-word title-word-1">Choose </span>
            <span class="title-word title-word-2">Your </span>
            <span class="title-word title-word-3">Cat </span>
            <span class="title-word title-word-4">Today !</span>
          </h2>
        </div>

        <br />
        <Row>
          {
            this.state.catsDataaa.slice(0, 4).map((item, idx)  => {
    return (
      <Col>
        <div className="cardss" key={idx}>
          <img src={item.catImg} />
          <div className="cardss-body">
            <h2>{item.catName}</h2>
            <p>
           {item.description}
  
            </p>
            <Nav.Link href="/AdoptionProcess" ><Button variant="outline-primary">Aoption Process</Button></Nav.Link>
          </div>
        </div>
      </Col>
  
    )
          })}

        </Row>

        <br/><br/>
        {/* <Col>
          <div className="cardss">
          <img src={img1} />
          <div className="cardss-body">
            <h2>1234</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>123555</h5>
          </div>
        </div>
          </Col>
          <Col>
          <div className="cardss">
          <img src={img1} />
          <div className="cardss-body">
            <h2>1234</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>123555</h5>
          </div>
        </div>
          </Col>
          <Col>
          <div className="cardss">
          <img src={img1} />
          <div className="cardss-body">
            <h2>1234</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>123555</h5>
          </div>
        </div>
          </Col> */}


      </>
    )
  }
}

export default Home