import React, { useState } from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { Heading, Header, Testimonials, Footer } from '../../Components';
import { images, roomsData } from '../../Data/dummy';
import './Rooms.css';

const name = 'ROOMS AND RATES';
const desc = 'Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. '

const RoomDetail = ({ room }) => {
  const [index, setIndex] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const { name, price, roomDesc, images, isHall } = room;
  return(
    <div className='room'>
      <div className="roomImageContainer">
        <img src={images[index]} alt="room" />
        <div className="imageOverlay">
          <div className='overlayContainer'>
          <div className='selectors'>
            {images.map((item, i) => (
                <div key={item + i } className={`selector ${i=== index && 'imageactive'}`} onClick={() => setIndex(i)}  />
            ))}
            </div>
          </div>
          </div>
        </div>
        <div className="roomName">
          <h2>{name}</h2>
        </div>
        <div className="roomActions">
          <div className="actions">
            <div className="viewDetails">
              <div className="vDBtn">
                <span>
                  {!openDetail && <AiOutlinePlus onClick={() => setOpenDetail(!openDetail)} />}
                  {openDetail && <AiOutlineMinus onClick={() => setOpenDetail(!openDetail)} />}
                </span>
                <p>VIEW {isHall? 'HALL' :'ROOM'} DETAILS</p>
              </div>
              { openDetail && 
                <div className="roomDetail scale-up-center">
                    <p>{roomDesc}</p>
                </div>
              }
            </div>

            <button 
              type='button'
              className="actionButton"
            >
              <span><TbCurrencyNaira/>{price}</span>
              {isHall? 'Avg/day' :'Avg/night'}
            </button>
          </div>
        </div>
    </div>
  )
}

const Rooms = () => {
  return (
    <div>
        <Heading img={images.homeImage} />
        <Header name={name} desc={desc} />
        <div className='rooms'>
          <div className="roomsContainer">
            {roomsData.map((room, i) => (
              <RoomDetail key={i} room={room}  />
            ))}
            
          </div>
        </div>
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Rooms