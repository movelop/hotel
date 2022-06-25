import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiFillMail } from 'react-icons/ai';
import { BsTwitter, BsInstagram, BsPhoneFill } from 'react-icons/bs';
import { FaFacebookF, FaLocationArrow } from 'react-icons/fa';


import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerContainer">
            <div className="address">
                <div className="addressHotel">
                    <h1>HERITAGE</h1>
                    <p>RESORTS</p>
                </div>
                <div className="addressPlace">
                    <p className='addressPlaceInfo'><FaLocationArrow/> 497 Evergreen Rd. Roseville, CA 95673</p>
                    <span className='addressPlaceInfo'><BsPhoneFill/> +44 345 678 903</span>
                    <p className='addressPlaceInfo'> <AiFillMail/> heritage_resorts@gmail.com</p>
                </div>
            </div>
            <ul className="flinks">
                <Link to='/'>
                    <li>About us</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact us</li>
                </Link>
                <Link to='/'>
                    <li>Terms&conditions</li>
                </Link>
                
            </ul>
            <div className="slinks">
                <NavLink to="/" className='social'>
                    <FaFacebookF />
                    Facebook
                </NavLink>
                <NavLink to="/" className='social'>
                    <BsTwitter />
                    Twitter
                </NavLink>
                <NavLink to="/" className='social'>
                    <BsInstagram />
                    Instagram
                </NavLink>
            </div>
            <div className="newsletter">
                <p>Subscribe to our newsletter</p>
                <div className="newsletterInput">
                    <input type="email" placeholder='Email address' />
                    <button type="submit" className="btn">OK</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;