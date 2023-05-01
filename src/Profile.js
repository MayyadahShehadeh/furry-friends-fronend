import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, Col, Row, Modal, Button, Form } from 'react-bootstrap'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCatsFromDb: [],
      show: false

    }
  }
  // -------------- get all cats data from db --------------
  componentDidMount = async () => {
    const { user } = this.props.auth0;
    let getCatsData = await axios.get(`${process.env.REACT_APP_SERVER}/dbCat?userEmail=${user.email}`);

    this.setState({
      allCatsFromDb: getCatsData.data
    })
    console.log('all cats from db', this.state.allCatsFromDb);
  }

  // --------------- add new cat ------------------- 
  addBook = async (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;

    let catInfo = {

      userEmail: user.email,
      catName: e.target.catName.value,
      catLength: e.target.catLength.value,
      catImg: e.target.catImg.value,
    }
    console.log(catInfo);
    let addCatData = await axios.post(`${process.env.REACT_APP_SERVER}/addNewCat`, catInfo);

    this.setState({
      allCatsFromDb: addCatData.data
    })
  }

  deleteCat = async (catID) => {
    const { user } = this.props.auth0;

    let deletCat = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteCat/${catID}?userEmail=${user.email}`)
    this.setState({
      allCatsFromDb: deletCat.data
    })

  }
  handleShow = () => {
    this.setState({ show: true })
  }

  handleClose = () => {
    this.setState({ show: false })
  }


  render() {
    return (
      <>


        <br />

        <Button variant="primary" onClick={this.handleShow} style={{ marginLeft: '700px' }}> Add Your Cat </Button>
        <br />

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.addBook} >
              <input type="text" name='catName' placeholder='add cat name' />
              <input type="text" name='catLength' placeholder='add cat Length' />
              <input type="text" name='catImg' placeholder='add cat img src' />


              {/* 

              <Form.Group controlId="formFile" className="mb-3"  >
                <Form.Label>add cat image</Form.Label>
                <Form.Control type="file" name='catImg'/>
              </Form.Group> */}

              <input type="submit" value="Add Book" onClick={this.handleClose} />
            </form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>

        </Modal>

        {/* ------------------------------ cats cards on profile page --------------------- */}
        <Row>
          {this.state.allCatsFromDb.map(item => {
            return (
              <Col>
                <Card style={{ width: '18rem', marginTop: '150px', marginBottom: '20px' }}>
                  <Card.Img variant="top" src={item.catImg} />
                  <Card.Body>
                    <Card.Title>cat nameeeeeeeeeeeee::: {item.catName}</Card.Title>
                    <Card.Text> Book catLength :{item.catLength}
                    </Card.Text>
                  </Card.Body>
                  <button onClick={() => { this.props.deleteCat(item._id) }}>Delete</button>
            {/* <button onClick={() => { this.props.updateBook(data._id) }} > update </button>  */}
                </Card>
              </Col>
            )
          })}
        </Row>





        {/* <img src={this.props.auth0.user.picture} alt={this.props.auth0.user.name} />
        <h2>{this.props.auth0.user.name}</h2>
        <p>{this.props.auth0.user.email}</p> */}
      </>
    )
  }
}

export default withAuth0(Profile);