import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import { Contact, Facilities, Home, NoPage, Rooms } from './Containers';

const App = () => {
  const location = useLocation();
  /* const history = useHistory(); */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='app'>
           <Routes>
               <Route path='/' element={ <Home /> }/>
               <Route path='/facilities' element={ <Facilities /> }/>
               <Route path='/rooms' element={ <Rooms /> }/>
               <Route path='/contact' element={ <Contact /> }/>
               <Route path='*' element={ <NoPage /> }/>
           </Routes>
    </div>
  )
}

export default App;