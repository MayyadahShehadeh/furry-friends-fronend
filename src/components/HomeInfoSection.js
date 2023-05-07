

import React, { Component } from 'react'
import './css/HomeInfoSection.css'
import img1 from './images/istockphoto.jpg'
import img2 from './images/istockphoto22.jpg'
import img3 from './images/istockphoto44.jpg'

export class HomeInfoSection extends Component {
  render() {
    return (
      <div>
        
        <div class="blog-card">
	<div class="meta">
		<div class="photo">
            <img src={img1} style={{width:'300px', height:'270px'}} />
         </div>
		<ul class="details">
			<li class="author"><a href="#">Furry Friends</a></li>
			<li class="date">May. 7, 2023</li>
			<li class="tags">
				
			</li>
		</ul>
	</div>
	<div class="description">
		<h1>ADOPTING MEANS YOU SAVE A LIFE!</h1>
		{/* <h2>Opening a door to the future</h2> */}
		<p> According to Research Gate, owning a cat, or any pet you adopt, has been shown to have positive effects on humans' ability to cope with stress, anxiety, depression, and loneliness. Taking a cat home from a shelter can improve your sense of happiness and general well-being..</p>
		<p class="read-more">
			
		</p>
	</div>
</div>
{/* ------------------------------------------- */}
<div class="blog-card alt">
	<div class="meta">
		<div class="photo" >
        <img src={img2} style={{width:'300px', height:'270px'}} />

        </div>
		<ul class="details">
        <li class="author"><a href="#">Furry Friends</a></li>
			<li class="date">May. 7, 2023</li>
			<li class="tags">
				
			</li>
		</ul>
	</div>
	<div class="description">
		<h1>Why should cats be adopted?
</h1>
		{/* <h2>Java is not the same as JavaScript</h2> */}
		<p>Sadly, about 860,000 are euthanized. Choosing adoption means saving the life of a feline in need. It also opens up space so the shelter can care for another cat in need until they find their forever home.
</p>
		<p class="read-more">
			
		</p>
	</div>
</div>
{/* -------------------------------------- */}
<div class="blog-card">
	<div class="meta">
		<div class="photo">
            <img src={img3} style={{width:'285px', height:'280px'}} />
         </div>
		<ul class="details">
			<li class="author"><a href="#">Furry Friends</a></li>
			<li class="date">May. 7, 2023</li>
			<li class="tags">
				
			</li>
		</ul>
	</div>
	<div class="description">
		<h1>CATS ARE LOW MAINTENANCE</h1>
		{/* <h2>Opening a door to the future</h2> */}
		<p> Cats enjoy your company, but they also love a little "me time" and like their own space. That makes them a low-maintenance pet that's ideal for busy animal lovers. Just feed them the best cat food and fresh water, keep a clean litter tray, get them some stimulating toys, and show them plenty of love and affection.

</p>
		<p class="read-more">
			
		</p>
	</div>
</div>
      </div>
    )
  }
}

export default HomeInfoSection