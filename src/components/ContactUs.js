import React, { Component } from 'react'
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";


import img1 from './images/5340927.jpg'
import './css/Contactus.css';
import { Container,Form,Button,Modal } from 'react-bootstrap';

 class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
          show:false
        };
      }

   

    createContact=(e)=>{

        e.preventDefault();
        
        
        this.setState({ show: true });
        
        e.target.reset();

      }

         // ----------------- Show Modal Functions ---------------------------
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
//  ------------------------------------------------------------------------
    render() {
        return (
            <>
              
                <Container className="container">
                    
                        <div class="div-in-contactus">
                            {/* <img alt="imag" src={img1}  /> */}
                            <p className="text-above-img1">
                                Contact Us</p>
                                <p className="text-above-img2">We'd Love To Hear From You !</p>
                        </div>
                   
                <br/> <br/>
                
                <Form className="form-section" onSubmit={this.createContact}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Label className="form-text" >First Name *</Form.Label>
                            <Form.Control className="form-control" type="text" placeholder="First Name"   required/>
                        </Form.Group> 
                          
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-text">Last Name *</Form.Label>
                            <Form.Control className="form-control" type="text" placeholder="Last Name"   required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-text">Email Address *</Form.Label>
                            <Form.Control className="form-control" type="Email" placeholder="Enter Email"   required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="form-text">Message</Form.Label>
                            <Form.Control className="form-control" placeholder="Enter Your Message" as="textarea" rows={3}   required/>
                        </Form.Group>
                        <Button className="contactus-form-button" variant="warning" type="submit" >Submit</Button>
                    </Form>
                  <br/> <br/>
                  
               {/* ------------------------------------ Add Modal ----------------------------------------------- */}

                <Modal show={this.state.show} onHide={this.hideModal}>
                    <Modal.Header>
                    <Modal.Title><h2>Thank You</h2></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>Your message has been sent</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.hideModal}> Close</Button>
                    </Modal.Footer>
                </Modal>
                </Container>
                
              
            </>
        )
    }
}

export default withAuth0(ContactUs)