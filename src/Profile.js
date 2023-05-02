import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, Col, Row, Modal, Button, Form } from 'react-bootstrap'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCatsFromDb: [],
      show: false,
      showUpdateModal:false,
      selectedCat:{}

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
  addCat = async (e) => {
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
    })}

  updateCat = async (catID) => {

    let choosenCat = this.state.allCatsFromDb.find(item => {
      return item._id === catID;
    })
    console.log({ choosenCat });

    this.setState({
      selectedCat: choosenCat,
      showUpdateModal: true
    })
  }

  updateCatInfo = async (e) => {
    const { user } = this.props.auth0;
    e.preventDefault();
    let catInputs = {
      userEmail: user.email,
      catName: e.target.catName.value,
      catLength: e.target.catLength.value,
      catImg: e.target.catImg.value
    }
    let catID = this.state.selectedCat._id;
    let catData = await axios.put(`${process.env.REACT_APP_SERVER}/updateCatData/${catID}`, catInputs);

    this.setState({
      allCatsFromDb: catData.data
    })
  }
  handleShow = () => {
    this.setState({ show: true})
  }

  handleClose = () => {
    this.setState({ show: false ,showUpdateModal:false})
  }


  render() {
    return (
      <>


<Modal show={this.state.showUpdateModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.updateCatInfo}>
              <input type="text" name='catName' defaultValue={this.state.selectedCat.catName} />
              <input type="text" name='catLength' defaultValue={this.state.selectedCat.catLength} />
              <input type="text" name='catImg' defaultValue={this.state.selectedCat.catImg} style={{width:'390px'}} />
              <br />
              <input type="submit" value="update" onClick={this.handleClose} />
              <button onClick={this.handleClose}>Close</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>

{/* ------------------------ ADD NEW CAT FORM ------------------------------- */}
        <br />
        <Button variant="primary" onClick={this.handleShow} style={{ marginLeft: '700px' }}> Add Your Cat </Button>
        <br />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.addCat} >
              <input type="text" name='catName' placeholder='add cat name' />
              <input type="text" name='catLength' placeholder='add cat Length' />
              <input type="text" name='catImg' placeholder='add cat img src' style={{width:'390px'}}/>
              <input type="submit" value="Add Cat" onClick={this.handleClose} />
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
                    <Card.Title>cat nameeeeee::: {item.catName}</Card.Title>
                    <Card.Text>  catLength :{item.catLength}
                    </Card.Text>
                  </Card.Body>
                  <button onClick={() => { this.deleteCat(item._id) }}>Delete</button>
            <button onClick={() => { this.updateCat(item._id) }} > update </button> 
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