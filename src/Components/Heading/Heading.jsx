import React from 'react';
import { BsFillCalendar2EventFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { Navbar } from '../';
import './Heading.css';

const Heading = ({ img }) => {
  const navigate = useNavigate();
  return (
    <div className="heading">
        <img src={img} alt="heading-img" className="headingImg" />
        <div className="headingOverlay">
            <Navbar />
            <div className="headingContainer">
              <div className="headingTexts">
                <h6>WELCOME TO</h6>
                <h2>HERITAGE</h2>
                <h4>RESORTS</h4>
                <p>Book your stay and enjoy Luxury
                  redefined at the most affordable rates.
                </p>
              </div>
              <div className="headingButtons">
                <button className="bookNow" onClick={() => navigate('/rooms')}>
                  <BsFillCalendar2EventFill />
                  Book Now
                </button>
                <div className='scroll'>
                  <span className="scrollText">Scroll</span>
                  <BsFillArrowDownCircleFill className='scrollIcon' />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Heading