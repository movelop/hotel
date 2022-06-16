import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdCancel } from 'react-icons/md';

import { navData } from '../../Data/dummy';
import './Navbar.css';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <div className="logoText">
                        <h1>Heritage</h1>
                        <h3>Resorts</h3>
                    </div>  
                </Link>   
            </div>
            <ul className="links">
                    {navData.map((link, index) => (
                        <NavLink
                        key={index}
                        to={`${link.link}`}
                        style= {({ isActive }) => ({ borderBottom: isActive ? '4px solid #E0B973' : '' })}
                        className='navLink'
                      >
                        <span className="capitalize">{link.name}</span>
                      </NavLink>
                    ))}
            </ul>
            <div className="navbarToggle">
              <GiHamburgerMenu size="27px" color='#E0B973' onClick={() => setToggleNav(true)} />
              { toggleNav && (
                <div className="navbarSmall scale-up-center">
                  <MdCancel className='navbarCancel' onClick={() => setToggleNav(false)} />
                  <ul className="navbarSmallLinks">
                    {navData.map((link, index) => (
                      <NavLink
                      key={index}
                      to={`${link.link}`}
                      style= {({ isActive }) => ({ borderBottom: isActive ? '3px solid #fff' : '' })}
                      className='navLinkSmall'
                    >
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                    ))}
                  </ul>
                </div>
              )}
            </div>
    </div>
  )
}

export default Navbar