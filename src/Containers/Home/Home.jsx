import React from 'react';
import { Link } from 'react-router-dom';

import { Footer, Heading, Testimonials } from '../../Components';
import { images } from '../../Data/dummy';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <Heading img = {images.homeImage} />
        <div className="complementry">
          <h2>All our room types are including complementary breakfast</h2>
        </div>
        <div>
          <div className="explore">
            <div className="exploreContainer">
              <div className="exploreTextContainer">
                <div className="exploreTexts">
                  <h3>Luxury redefined</h3>
                  <p>Our rooms are designed to transport 
                    you into an environment made for leisure. 
                    Take your mind off the day-to-day of home 
                    life and find a private paradise for yourself.
                  </p>
                  <Link to="/rooms">
                    <button className='exploreButton'>Explore</button>
                  </Link>
                </div>
                <div className='line' />
              </div>
              <div className="exploreImageContainer">
                <img src={images.exploreRooms} alt="exploreRooms" />
              </div>
            </div>
          </div>
          <div className="explore">
            <div className="exploreContainer">
              <div className="exploreTextContainer">
                <div className="exploreTexts">
                  <h3>Leave your worries in the sand</h3>
                  <p>We love life at the beach. Being close
                    to the ocean with access to endless sandy
                    beach ensures a relaxed state of mind. It 
                    seems like time stands still watching the 
                    ocean. 
                  </p>
                  <Link to="/facilities">
                    <button className='exploreButton'>Explore</button>
                  </Link>
                </div>
                <div className='line'  />
              </div>
              <div className="exploreImageContainer">
                <img src={images.explore2} alt="exploreRooms" />
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home;