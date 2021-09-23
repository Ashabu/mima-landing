import React, { useState } from 'react';
import './App.scss';
import AppHeader from './Components/AppHeader/AppHeader';
import Carousel from './Containers/Carousel/Carousel';
import Benefits from './Components/Benefits/Benefits';
import Commisions from './Components/Commision/Commisions';
import WhyUs from './Components/WhyUs/WhyUs';
import Faq from './Components/FAQ/Faq';
import ContactUs from './Components/ContactUs/ContactUs';

const App = () => {



  return (
    <div className="App">

      <AppHeader />
      {/* <div className='con-4'>
        <Carousel />

      </div> */}
      <div className='con-1'>
        <div className='content'>
          <h1>The official Mima Affiliate program</h1>
          <p>And 100 Free spins + Secret Daily Bonuses</p>
          <a href=''>Join now</a>
        </div>
      </div>
      <Benefits/>
      <Commisions/>
      <WhyUs/>
      <Faq/>
      <ContactUs/>
      
      
      
      <div className = 'con-8'> 
       <div className='partners'>

       </div>

      </div>
    </div>
  );
}

export default App;
