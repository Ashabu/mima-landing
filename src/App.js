import React, { useState } from 'react';
import './App.scss';
import AppHeader from './Components/AppHeader/AppHeader';
import Carousel from './Containers/Carousel/Carousel';
import Benefits from './Components/Benefits/Benefits';
import Commisions from './Components/Commision/Commisions';
import WhyUs from './Components/WhyUs/WhyUs';
import Faq from './Components/FAQ/Faq';
import ContactUs from './Components/ContactUs/ContactUs';
import AffiliateProgram from './Components/AffiliateProgram/AffiliateProgram';
import AppFooter from './Components/AppFooter/AppFooter';

const App = () => {

  return (
    <div className="App">

      <AppHeader />
      {/* <div className='con-4'>
        <Carousel />

      </div> */}
      <AffiliateProgram />
      <Benefits />
      <Commisions />
      <WhyUs />
      <Faq />
      <ContactUs />
      <AppFooter />
    </div>
  );
}

export default App;
