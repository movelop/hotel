import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi'

import { HeadingSmall, Footer } from '../../Components';
import { images } from '../../Data/dummy';
import './Contact.css';

const Contact = () => {
  return (
    <div>
        <HeadingSmall text={'CONTACT-US'} img={images.queen}/>
        <div className="contact">
          <div className="contactContainer">
            <div className="contactTop">
              <h3>WE ARE HERE FOR YOU</h3>
              <p>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, 
                please forward it to our support desk and we will get back to you as soon as possible.
              </p>
            </div>
            <div className="contactBottom">
              <div className="contactAddress">
                <h2>1 Ojo Asalu Cresent, Ota, Ogun State.</h2>
                <div className="viewMap">
                  <span className='text'>View Map</span>
                  <HiOutlineArrowRight className='arrow' />
                </div>
                <div className="contactInfo">
                  <p>Phone: +44 345 678 903 </p>
                  <p>Email: luxury_hotels@gmail.com</p>
                </div>
              </div>
              <div className="contactSub">
                <h2>Send us a message</h2>
                <form className="form">
                  <div className="formInput">
                    <label >Name</label>
                    <input type="text" />
                  </div>
                  <div className="formInput">
                    <label >Email Address</label>
                    <input type="email" />
                  </div>
                  <div className="formInput">
                    <label >Message</label>
                    <textarea />
                  </div>
                  <div className="contactButton">
                    <button type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact;