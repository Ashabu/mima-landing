import React, { useState } from 'react';
import './App.scss';
import AppHeader from './Components/AppHeader/AppHeader';
import Carousels from './Containers/Carousel/Carousel';
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
      <AffiliateProgram />
      <Benefits />
      <Commisions />
      <div className='con-4'>
        <Carousels />

      </div>
      <WhyUs />
      <Faq />
      <ContactUs />
      <AppFooter />
    </div>
  );
}

export default App;
