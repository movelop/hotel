import React from 'react';

import { Navbar } from '../'
import './HeadingSmall.css';

const HeadingSmall = ({ text }) => {
  return (
    <div className='small'>
        <Navbar />
        <div className="smallText">
            <h3>{text}</h3>
        </div>
    </div>
  )
}

export default HeadingSmall