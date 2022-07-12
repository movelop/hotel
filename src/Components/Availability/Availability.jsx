import React, { useContext} from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { TbCurrencyNaira } from 'react-icons/tb';

import './Availability.css';
import { SearchContext } from '../../contexts/SearchContext';

const Availability = ({ data }) => {
    const { dates, options } = useContext(SearchContext);
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const daydiff = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return daydiff;
  }

  const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);
  return (
    <div>
        <div className="availability">
            {data.map((room) => (
                <div key={room._id}>
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
                                <h4><span><TbCurrencyNaira /></span>{room.price}</h4>
                            </div>
                            <div>
                                <label>Total ({`${days} Night(s) for ${options.rooms} room(s)`})</label>
                                <h4><span><TbCurrencyNaira /></span>{days* options.rooms * room.price}</h4>
                            </div>
                            <button
                                className="availabilityButton"
                                onClick={() => {}}
                            >
                                Book
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Availability