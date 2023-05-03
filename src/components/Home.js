import React, { Component } from 'react'
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
// import './css/bootstrap.min.css'
// import './css/responsive.css'
// import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/Website_HeroBanner_TNRCatsnip.jpg'
import image2 from './images/3858438.jpg'
import image3 from './images/5340927.jpg'



export class Home extends Component {

  
  render() {
    return (
      <>
       <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className="w-100 h-50 d-block"
        itemId={1}
        src={image1}
        alt="..."
      >
        {/* <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={image2}
        alt="..."
      >
        {/* <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={image3}
        alt="..."
      >
        {/* <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </MDBCarouselItem>
    </MDBCarousel>

    <br/> <br/><br/><br/><br/>
      </>
    )
  }
}

export default Home