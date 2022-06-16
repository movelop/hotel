import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Contact, Facilities, Home, Rooms } from './Containers';

const App = () => {
  return (
    <div className='app'>
       <Router>
           <Routes>
               <Route path='/' element={ <Home /> }/>
               <Route path='/facilities' element={ <Facilities /> }/>
               <Route path='/rooms' element={ <Rooms /> }/>
               <Route path='/contact' element={ <Contact /> }/>
           </Routes>
       </Router>
    </div>
  )
}

export default App;