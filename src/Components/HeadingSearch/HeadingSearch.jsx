import React, { useState, useContext } from 'react';
import { BsFillCalendar2EventFill, BsFillPersonFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

import { SearchContext } from '../../contexts/SearchContext';
import './HeadingSearch.css';

const HeadingSearch = () => {
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        rooms: 1,
    });
    const navigate = useNavigate();
    const { dispatch } = useContext(SearchContext);  

    const handleOptions = (name, operation) => {
        setOptions((prev) => {
        return {
            ...prev,
            [name]: operation === 'increment' ? options[name] + 1 : options[name] - 1
        }
        })
    }

    const handleSearch = () => {
        dispatch({ type: 'NEW_SEARCH', payload: { dates, options } });
        navigate('/booking', { state: { dates, options } });
    }
    return (
        <div className="headerSearchContainer">
            <div className="headerSearchItem" >
                <BsFillCalendar2EventFill className='headerIcon' />
                <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                    dates[0].endDate,
                    "dd/MM/yyyy"
                )}`}
                </span>
                {openDate && (
                    <div className="date" onMouseLeave={() => setOpenDate(false)}>
                        <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                        minDate={new Date()}
                        />
                    </div>
                )}
            </div>
            <div className="headerSearchItem">
                <BsFillPersonFill className='headerIcon' />
                <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>
                {`${options.adult} adult · ${options.children} children · ${options.rooms} room`}
                </span>
                {openOptions && (
                    <div className="options" onMouseLeave={() => setOpenOptions(false)}>
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button
                                    disabled={options.adult <= 1}
                                    className="optionCounterButton"
                                    onClick={() => handleOptions('adult', 'decrement')}
                                >
                                    -
                                </button>
                                <span className="optionCounterNumber">
                                    {options.adult}
                                </span>
                                <button
                                    className="optionCounterButton"
                                    onClick={() => handleOptions('adult', 'increment')}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button
                                    disabled={options.children <= 0}
                                    className="optionCounterButton"
                                    onClick={() => handleOptions('children', 'decrement')}
                                >
                                    -
                                </button>
                                <span className="optionCounterNumber">
                                    {options.children}
                                </span>
                                <button
                                    className="optionCounterButton"
                                    onClick={() => handleOptions('children', 'increment')}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button
                                    disabled={options.rooms <= 1}
                                    className="optionCounterButton"
                                    onClick={() => handleOptions('rooms', 'decrement')}
                                >
                                    -
                                </button>
                                <span className="optionCounterNumber">
                                    {options.rooms}
                                </span>
                                <button
                                    className="optionCounterButton"
                                    onClick={() => handleOptions('rooms', 'increment')}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                )} 
            </div>
            <div className="headerSearchItem">
                <button className="headingButton" onClick={handleSearch}>Check Availability</button>
            </div>
        </div>   
    )
}

export default HeadingSearch