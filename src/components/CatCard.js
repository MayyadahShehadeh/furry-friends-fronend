import React, { Component } from 'react'
import { Card, Col, Button, Modal,Nav } from 'react-bootstrap'
import './css/catCard.css'
export class CatCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }



  showModal2 = () => { this.setState({ show: true }) }

  handleClose = () => { this.setState({ show: false }) }
  render() {
    return (
      <>




        <Modal
          show={this.state.show}
          onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.catName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <img src={this.props.catImg} alt="" width="250" height="275" id="hp"/>
            <p><b> - Cat Length :</b> {this.props.catLength} </p>
            <p><b> - Cat origin : </b> {this.props.origin} </p>
            <p><b> - Cat Wieght : </b> {this.props.catWieght} </p>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>


        <Col>
          <Card style={{ width: '18rem', marginBottom: '10px' }} >
            <a href='#'>

              <Card.Img variant="top" src={this.props.catImg}
                onClick={this.showModal2}
                style={{ width: '300px', hieght: '200px' }} />
            </a>


            <Card.Body>
              <Card.Title>{this.props.catName}</Card.Title>
              <Card.Text>
                Cat Length : {this.props.catLength}
              </Card.Text>
              <Card.Text>
                Cat origin : {this.props.origin}
              </Card.Text>
              
              <Card.Text>
              Cat Wieght : {this.props.catWieght}
              </Card.Text>
              
              <Button variant="primary" style={{ backgroundColor: '#653333', border: '#653333' , marginBottom:'10px'}} onClick={() => { this.props.ownerContactInformation(this.props.id) }}>Contact The Owner</Button>

              <Nav.Link href="/AdoptionProcess" >
              <Button variant="primary" style={{ backgroundColor: '#653333', border: '#653333' }} >Adoption Process
              </Button></Nav.Link>
            </Card.Body>
          </Card>
        </Col>

      </>
    )
  }
}

export default CatCard