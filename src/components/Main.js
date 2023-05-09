import axios from 'axios';
import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';

import { Modal, Row, Form } from 'react-bootstrap'
import CatCard from './CatCard';
import Home from './Home';


export class AllCats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCats: [],
    
      catOwnerEmail:'',
      catOwnerName:'',
      catOwnerPhone:'',
      show:false,
      selectedCatsss:{}
  

    }}

  // ------------- to get all cats ------------
  componentDidMount = async () => {
    const { user } = this.props.auth0;
    let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCats`);
    let getCatsData = await axios.get(`${process.env.REACT_APP_SERVER}/getAllCats`);
    
    // let getCatsDb = getCatsData.data;
    let catsArray = [...getCatsData.data,...catsData.data];
    // console.log('cat from bd',this.state.allCatsFromDb);
    this.setState({
      allCats: catsArray
      // allCatsFromDb:getCatsDb
    })
    console.log('allCats', this.state.allCats);
    // console.log('all cats from db' ,getCatsData);
  }
  // -------------- to get cats according their breed -------------
  choosenBreed = async (e) => {
    const selecetedCatBreed = e.target.value;
    let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCatsBreed?breedQuery=${selecetedCatBreed}`);
    let choosenCat = await axios.get(`${process.env.REACT_APP_SERVER}/choosenCatt?choosenCat=${selecetedCatBreed}`);

    let choosenCatArray = [...choosenCat.data,...catsData.data];

    this.setState({
      allCats: choosenCatArray
    })
    console.log('choosen cat filter', this.state.allCats );
  }

  // ------------ get person contact information ---------------- 
ownerContactInformation = async (catID) => {
  // e.preventDefault();
  const { user } = this.props.auth0;
  let url = `${process.env.REACT_APP_SERVER}/getCatOwner`;
  let ownerData = await axios.get(url);
  console.log('axios owner data' , ownerData);
let ownerDataa = ownerData.data;

  let choosenCat = this.state.allCats.find(item => {
    return item._id === catID

  })
  this.setState({
   selectedCatsss:choosenCat
  })

  console.log('ssssss',this.state.selectedCatsss);
     if (this.state.selectedCatsss._id){
    
      this.setState({
        catOwnerEmail: this.state.selectedCatsss.userEmail,
        catOwnerName: this.state.selectedCatsss.userName,
        catOwnerPhone:this.state.selectedCatsss.userPhone,
        show:true
      })
    }else if(!this.state.selectedCatsss._id ){
      this.setState({
        catOwnerEmail: ownerDataa.ownerEmail,
        catOwnerName: ownerDataa.ownerName,
        catOwnerPhone: ownerDataa.ownerPhone,
        show:true
      })

    }
}

showModal = () =>{this.setState({show:true})}
handleClose = () =>{this.setState({show:false})}

  render() {
    

    return (
      <>
      
{/* ------------------------- FILTER CATS --------------------- */}
        <div className="row h-100 justify-content-center align-items-center" style={{ margin: '35px',marginTop:'100px'}}>
          <Form.Select aria-label="Default select example" name='catBreed' style={{ width: '50%' }} placeholder='choose cat breed'
            onChange={(e) => this.choosenBreed(e)} >
            <option valu="" >Select Cat Breed</option>
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

  {/* ----------------------------- SHOW CONTACT OWNER INFORMATION IN MODAL ---------------- */}
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
        <div className='catsCardsClass' style={{margin:'35px'}}>

        <Row>
          {this.state.allCats.map((item, idx) => {
            return (
              <CatCard
              id={item._id}
              key={idx}
              catWieght={item.catWieght}
              catImg={item.catImg}
              catName={item.catName}
              catLength={item.catLength}
              origin={item.origin}
              showModal = {this.showModal}
              ownerContactInformation = {this.ownerContactInformation}
              />
              )
            })}
        </Row>
            </div>
       
      </>
    )
  }
}

export default withAuth0(AllCats);