import axios from 'axios';
import React, { Component } from 'react'

import { Card, Button, Col, Row,Form } from 'react-bootstrap'
import CatCard from './CatCard';

export class AllCats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCats: [],

      catBreed:''
    }

  }

  componentDidMount = async () => {
    // const { user } = this.props.auth0;
    let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCats`);
    this.setState({
      allCats: catsData.data
    })

    console.log('allCats', this.state.allCats);
  }

choosenBreed = async(e) =>{
  const selecetedCatBreed = e.target.value;
  let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCatsBreed?breedQuery=${selecetedCatBreed}`);
this.setState({
  allCats: catsData.data
})

}
  render() {
    return (
      <>
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


        <Row>
          
          {this.state.allCats.map((item, idx) => {

            return (

              <CatCard
              key={idx}
              catImg = {item.catImg}
              catName = {item.catName}
              catLength = {item.catLength}
              catWieght = {item.catWieght}
              />
            )
          })}
        </Row>

      </>
    )
  }
}

export default AllCats