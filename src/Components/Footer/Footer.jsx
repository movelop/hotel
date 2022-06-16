import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


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
                    <p>497 Evergreen Rd. Roseville, CA 95673</p>
                    <span>+44 345 678 903</span>
                    <p>heritage_resorts@gmail.com</p>
                </div>
            </div>
            <ul className="flinks">
                <li>About us</li>
                <li>Contact</li>
                <li>Terms&Conditions</li>
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