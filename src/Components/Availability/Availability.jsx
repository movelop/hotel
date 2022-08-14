import React, { useContext} from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { TbCurrencyNaira } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

import './Availability.css';
import { SearchContext } from '../../contexts/SearchContext';

const Availability = ({ room }) => {
    const { dates, options } = useContext(SearchContext);
    const navigate = useNavigate();

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const dayDifference = (date1, date2) => {
        const timeDiff = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
        const daydiff = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return daydiff;
    }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const totalPrice = days* options.rooms * room.price

  const handleBooking = (room) => {
    navigate('/booking/checkout', { state: { dates, options, days, totalPrice, room } });
  }


  return (
    <div>
        <div>
            <div className="availabilityCard">
                <div className="availabiltyCardImg">
                    <img src={room.images[0]} alt="room" />
                </div>
                <div className="availabilityCardInfo">
                    <h2>{room.title}</h2>
                    <span className="location">
                        <HiLocationMarker /> Heritage Resort, Ota
                    </span>
                    <div className="details">
                        <div>
                            <label>Size:</label>
                            <p>{room.size}</p>
                        </div>
                        <div>
                            <label>Occupancy:</label>
                            <p>{room.maxPeople}</p>
                        </div>
                        <div>
                            <label>Bedding:</label>
                            <p>{room.bedding}</p>
                        </div>
                    </div>
                </div>
                <div className="availabilityCardPrice">
                    <div>
                        <label>Daily Price</label>
                        <h4><span><TbCurrencyNaira /></span>{room.price.toLocaleString("en-US")}</h4>
                    </div>
                    <div>
                        <label>Total ({`${days} Night(s) for ${options.rooms} room(s)`})</label>
                        <h4 className='last'><span><TbCurrencyNaira /></span>{totalPrice.toLocaleString("en-US")}</h4>
                    </div>
                    <button
                        className="availabilityButton"
                        onClick={() => handleBooking(room)}
                    >
                        Book
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Availability