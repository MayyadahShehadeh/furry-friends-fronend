import axios from 'axios';
import React, { Component } from 'react'

import { Modal, Row, Form } from 'react-bootstrap'
import CatCard from './CatCard';

export class AllCats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCats: [],
      catOwnerEmail:'',
      catOwnerName:'',
      catOwnerPhone:'',

      show:false,

    }

  }
  // ----------------- to get all cats ---------------
  componentDidMount = async () => {
    // const { user } = this.props.auth0;
    let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCats`);
    this.setState({
      allCats: catsData.data
    })

    console.log('allCats', this.state.allCats);
  }
  // -------------- to get cats according their breed -------------
  choosenBreed = async (e) => {
    const selecetedCatBreed = e.target.value;
    let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCatsBreed?breedQuery=${selecetedCatBreed}`);
    this.setState({
      allCats: catsData.data
    })

  }

  // ------------ get person contact information ---------------- 

ownerContactInformation = async (e) => {
  e.preventDefault();
  let url = `${process.env.REACT_APP_SERVER}/getCatOwner`;
  let ownerData = await axios.get(url);
  // let getOwnerData = ownerData.data;
  console.log('axios owner data' , ownerData);
this.setState({
  catOwnerEmail: ownerData.data.ownerEmail,
  catOwnerName: ownerData.data.ownerName,
  catOwnerPhone: ownerData.data.ownerPhone,
  show:true
})
console.log('owner email', this.state.catOwnerEmail);
console.log('owner name', this.state.catOwnerName);
console.log('owner phone', this.state.catOwnerPhone);
}

showModal = () =>{
  this.setState({
    show:true
  })
}
handleClose = () =>{
  this.setState({
    show:false
  })
}

  render() {
    return (
      <>

              {/* <button onClick={this.ownerContactInformation}>Close</button> */}

    
        <div className="row h-100 justify-content-center align-items-center" style={{ margin: '35px' }}>
          <Form.Select aria-label="Default select example" name='catBreed' style={{ width: '50%' }}
            onChange={(e) => this.choosenBreed(e)} >
            <option defaultValue="" disabled hidden>Select breed</option>
            <option value="">All</option>
            <option value="Burmese">Burmese</option>
            <option value="Chausie">Chausie</option>
            <option value="Thai">Thai</option>
            <option value="American Wirehair">American Wirehair</option>
            <option value="Arabian Mau">Arabian Mau</option>
            <option value="California Spangled">California Spangled</option>
            <option value="Cornish">Cornish Rex</option>
            <option value="Devon">Devon Rex</option>
          </Form.Select>
        </div >

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Cat Owner Contact Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
        Name : {this.state.catOwnerName}<br/>
          Email : {this.state.catOwnerEmail}<br/>
        Phone : {this.state.catOwnerPhone}
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>


        {/* ----------------------- TO RENDER ALL CATS IN CARDS -----------------------*/}
        <Row>
          {this.state.allCats.map((item, idx) => {
            return (
              <CatCard
                key={idx}
                catImg={item.catImg}
                catName={item.catName}
                catLength={item.catLength}
                catWieght={item.catWieght}
                showModal = {this.showModal}
                ownerContactInformation = {this.ownerContactInformation}
              />
            )
          })}
        </Row>

      </>
    )
  }
}

export default AllCats