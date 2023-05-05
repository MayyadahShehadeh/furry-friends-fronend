import React, { Component } from 'react'
import img1 from './images/3853637.jpg'
export class CareAfterAdoption extends Component {
  render() {
    return (
      <div>
        
        <img src={img1} style={{
                    margin: '0', display: 'flex',
                    flexWrap: 'inherit',
                    alignItems: 'center',
                    justifyContent: 'space-between', width: '100%', height: '2rm'
                }} />

      </div>
    )
  }
}

export default CareAfterAdoption