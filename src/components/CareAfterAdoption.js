import React, { Component } from 'react'
import img1 from './images/3853637.jpg'
import './css/Adoppro.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Accordion from 'react-bootstrap/Accordion';


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
        <br /> <br />

        <Breadcrumb style={{ marginLeft: '180px' }}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/AdoptionProcess">
            Adopt
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Care After Adoption</Breadcrumb.Item>
        </Breadcrumb>
        <br /> <br />
        <div className='allConta'>
          <p className='paragAdop'>
            As pet guardians, we try to understand our pets the best we can, even if that means going though some tough and frustrating growing pains! The ARL is here to help you and your pet in your time of need. Maybe you just need advice on potty training, or maybe you need to see if you qualify for a low-cost spay/neuter surgery for your pet.</p>

          <p className='paragAdop'>
            As pet guardians, we try to understand our pets the best we can, even if that means going though some tough and frustrating growing pains! The ARL is here to help you and your pet in your time of need. Maybe you just need advice on potty training, or maybe you need to see if you qualify for a low-cost spay/neuter surgery for your pet.</p>

          <br />


          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{ backgroundColor: 'pink' }}>The First Few Days
              </Accordion.Header>
              <Accordion.Body>
                <p><b>
                  For the first 3 days, we strongly recommend that you keep your new kitty’s world small.
                </b> </p>
                <p>
                  By this, we mean keeping them confined to one room. We particularly like the bedroom, as the kitty can come out at night while you’re sleeping and get used to your smell and sounds while you are at your most non-threatening.
                </p>
                <p>
                  It’s important to recognize that keeping a cat confined to one room isn’t seen as a jail by the cat—it’s seen as a safe place. Cats are inherently afraid of big, unfamiliar places and will look for a small, often dark, safe, and secluded place in which to take refuge until they get the lay of the land.
                </p>
                <p>
                  Being confined to one room also helps the new cat parent monitor how much the new kitty is eating or drinking and if they’re using the litter box. It’s not unusual for a cat to be too stressed for a day or 2 to eat anything, but after that, they need to start eating.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item eventKey="1">
              <Accordion.Header style={{ backgroundColor: 'pink' }}>The First Few Weeks
              </Accordion.Header>
              <Accordion.Body>
                <p><b>
                  Every cat is different. While some will be completely comfortable within a few days, some cats won’t start venturing out of their safe place for weeks. It’s important that they do it on their terms and that the interactions aren’t forced.
                </b></p>
                <p>
                  Continue spending time with your kitty and work at finding things they like. Is it petting? Brushing? Catnip? Laser pointers? Treats? Use what they like to continue to foster growth and your relationship. During the first few weeks, you should see more and more of their personality start to show through as they’re less anxious and begin to acclimate to your home.
                </p>
                <p>
                  Moving some of their favorite objects, such as cat beds, toys, or scratchers, from their safe rooms to other places in the house may encourage them to venture further into their new world. Moving beds or other scented objects from the house into their safe room and vice versa also helps cats already in the home become more accustomed to the smell of the new cat, and the new cat more accustomed to the cats that are their new neighbors.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item eventKey="2">
              <Accordion.Header style={{ backgroundColor: 'pink' }}>The First Few Months

              </Accordion.Header>
              <Accordion.Body>
                <p><b>
                  For most cats, it takes about 3 months to be truly settled into a new home.
                </b></p>
                <p>
                  Some cats will take much longer while others may settle incredibly quickly, but you can expect at least 3 months for typical cats to acclimate enough for you to feel like you have a real relationship with them.  It may seem like a long time, but the love and companionship is worth the wait.
                </p>

              </Accordion.Body>
            </Accordion.Item>

          </Accordion>



        </div>
        <br /> <br />


      </div>
    )
  }
}

export default CareAfterAdoption