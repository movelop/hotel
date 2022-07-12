import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { Availability, Footer, HeadingSearch, HeadingSmall, Testimonials } from '../../Components';
import { images } from '../../Data/dummy';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    confirmation: '',
    email: '',
  });
  const [error, setError] = useState('');
  const { data } = useFetch('/api/rooms');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.confirmation === "" && formData.email === "") {
      return setError("Please fill out ONE of these fields.");
    }
    if (formData.confirmation.length > 0 && formData.email.length > 0) {
      return setError("Only Fill out ONE of these fields.");
    }

    navigate('/booking/existing');
  };

  return (
    <div>
      <HeadingSmall text='Make A Reservation' img={images.lobby} />
      <div className="booking">
        <div className="checkReservation">
          <h1>Already have a Booking?</h1>
          <div className='checkReservationForm'>
            <input
              maxLength="6"
              name="confirmation"
              type="text"
              placeholder="Enter Confirmation Code"
              value={formData.confirmation}
              onChange={handleChange}
            />
            <input
              name="email"
              type="text"
              placeholder="Or Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
            <button onClick={handleSubmit} className="bookingButton">
              Lookup
            </button>
          </div>
          <span className="disclaimer">
            * expired bookings will automatically be deleted
          </span>
          {error.length > 0 && <span style={{ color: "red" }}>{error}</span>}
        </div>
        <div className="bookingHeader">
          <h1>BOOK A ROOM</h1>
        </div>
        <div className="bookingSearch">
          <HeadingSearch />
        </div>
        {data && (
          <Availability data={data} />
        )}
      </div>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Booking