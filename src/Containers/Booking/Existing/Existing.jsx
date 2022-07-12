import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Existing.css';
import { images } from '../../../Data/dummy';
import { Footer, HeadingSmall, Testimonials } from '../../../Components';

const Existing = () => {
  const [existing, setExisting] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <HeadingSmall text='Manage Your Reservations' img={images.existing} />
      <div className="existing">
        <div className="existingContainer">
          {existing ? (
            <div className="found">
              <div className="foundCard">
                <div className="foundInfo">
                  <h1>Confirmation Number:</h1>
                  <h1>1234567890</h1>
                  <div>
                    <h3>Room:</h3>
                    <h3>234</h3>
                  </div>
                  <div>
                    <h3>Name:</h3>
                    <h3>
                      Lagbaja Lakasegbe
                    </h3>
                  </div>
                  <div>
                    <h3>Email:</h3>
                    <h3>barmilitary@gmail.com</h3>
                  </div>
                  <div>
                    <h3>Phone:</h3>
                    <h3>+2347085597952</h3>
                  </div>
                  <div>
                    <h3>Check-in Date:</h3>
                    <h3>
                      {new Date().toLocaleString("en-us", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </h3>
                  </div>
                  <div>
                    <h3>Check-out Date:</h3>
                    <h3>
                      {new Date().toLocaleString("en-us", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </h3>
                  </div>
                </div>
                <div className="actions">
                  <button
                    className="deleteButton"
                    onClick={() => {}}
                  >
                    Cancel Reservation
                  </button>
                </div>
              </div>
            </div>
          ) : (
              <div className='notExisting'>
                <h1>No Booking was Found...</h1>
                <button className="notExistingButton" onClick={() => navigate("/booking")}>
                  Go Back
                </button>
              </div>
          ) }
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Existing;