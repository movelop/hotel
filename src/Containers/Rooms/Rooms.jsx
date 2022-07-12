import React from 'react';

import { Heading, Header, Testimonials, Footer } from '../../Components';
import { images } from '../../Data/dummy';
import './Rooms.css';
import useFetch from '../../hooks/useFetch';
import { RoomDetails } from '../../Components';

const name = 'ROOMS AND RATES';
const desc = 'Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. '



const Rooms = () => {
  const { data } = useFetch('/api/rooms')
  return (
    <div>
        <Heading img={images.homeImage} />
        <Header name={name} desc={desc} />
        <div className='rooms'>
          <div className="roomsContainer">
            {data.map((item) => (
              <RoomDetails key={item._id} item={item}  />
            ))}
            
          </div>
        </div>
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Rooms