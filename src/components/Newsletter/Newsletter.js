import React from 'react'

import Subheading from '../../components/Subheading/Subheading'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="app__newsletter">
        <div className="app__newsletter-heading">
            <Subheading title="Newsletter" />
            <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
            <p className="p__opensans" style={{ margin: '0.5rem 0 3rem 0' }}>And never miss latest Updates!</p>
        </div>
        <div className="app__newsletter-input flex__center">
            <input type="email" name="email" placeholder="Email Address" />
            <button className="custom__button" type="button">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter