import React from 'react';

import { Heading, Testimonials, Footer, Header } from '../../Components';
import { images, facilities } from '../../Data/dummy';
import './Facilities.css';

const desc = 'We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so that we can ensure an experience quite unique. Luxury hotels offers the perfect setting with stunning views for leisure and our modern luxury resort facilities will help you enjoy the best of all.';

const Facility = ({ name, img }) => (
  <div className="facility">
    <img src={img} alt={name} />
    <div className='overlay'/>
    <div className="facilityName">
      <h4>{name}</h4>
    </div>
  </div>
)

const Facilities = () => {
  return (
    <div>
        <Heading img = {images.facilitiesImg} />
        <Header name='FACILITIES'  desc = { desc } />
        <div className="facilities">
          <div className="facilitiesContainer">
            {facilities.map((item, index) => (
              <Facility key={index} name={item.name} img={item.img} />
            ))}
          </div>
        </div>
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Facilities