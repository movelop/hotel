import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbCurrencyNaira } from 'react-icons/tb';

const RoomDetail = ({ item }) => {
    const [index, setIndex] = useState(0);
    const {_id, title, price, images, desc } = item;
  
    return(
      <div className='room'>
        <div className="roomImageContainer"
          style={{
            background: ` no-repeat center/cover url(${images[0]}) `,
          }}
        >
          <div className="imageOverlay"/>
        </div>
        <div className="roomName">
          <h2>{title}</h2>
        </div>
        <div className="roomSummary">
          <div className="roomSummaryText">
            <p>{desc}</p>
          </div>
          <div className="actionButton">
            <div className="roomPrice">
              <TbCurrencyNaira />
              <span>{price}</span>
            </div>
            <Link 
              to={`/rooms/${_id}`}
              state = {{ data: item}}
            >
              <button>Explore</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  export default RoomDetail