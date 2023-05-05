import React, { Component } from 'react'
import img1 from './images/3848416.jpg'
import './css/Adoppro.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export class AdoptionProce extends Component {
    render() {
        return (
            <div>

                <img src={img1} style={{
                    margin: '0', display: 'flex',
                    flexWrap: 'inherit',
                    alignItems: 'center',
                    justifyContent: 'space-between', width: '100%', height: '2rm'
                }} />
                    <Breadcrumb style={{marginLeft:'180px'}}>
                         <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                         <Breadcrumb.Item href="/AdoptionProcess">
                         Adopt
                         </Breadcrumb.Item>
                         <Breadcrumb.Item active>Adoption Process</Breadcrumb.Item>
                       </Breadcrumb>
                <br /> <br />
                <div className='allConta'>

                    <b> <h1 className='titleAdop'>
                        We are excited that you're considering adopting

                    </h1></b>

                    <p className='paragAdop'>
                        Thousands of animals come through the Animal Rescue League's doors every year, but no matter how they got here or where they came from, they're provided with shelter, nourishing food, individualized medical treatment, behavioral rehabilitation when necessary, and most important: love.
                    </p>
                    <h2 className='h2title'>
                        You are the next step in their journey to finding a loving home, and we are here to help.
                    </h2>

                    <br/>
                    <h1 className='titleAdop2'>Before Your Visit</h1>
                    <p className='paragAdop'>
                        1. Get started by looking through our online adoptable pet listings.
                    </p>
                    <p className='paragAdop'>
            
                        2. If a pet has specific contact info in their profile about how to schedule a visit, please reach out directly to that contact.
                    </p>
                    <p className='paragAdop'>
                        3. Please allow one to two hours to complete the adoption process.
                    </p>

                    <br/>

                    <h1 className='titleAdop2'>What to Bring</h1>

                    <p style={{fontSize:'22px'}}>
      <b>1. Valid Driver’s License or picture ID, and proof of address</b> (such as a utility bill or bank statement). You must be 18 years or older and sign an adoption contract.

      </p>
      <p style={{fontSize:'22px'}}>
      <b>2. Leash and collar (dogs) or carrier (cats and small pets).</b> Required when taking a pet home for safety reasons.

      </p>

                </div>
<br/> <br/>
            </div>


        )
    }
}

export default AdoptionProce