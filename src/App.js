import React, { useState, useEffect, useReducer } from 'react';
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
import Lang from './Services/LanguageService';
import AppPreLoader from './Components/AppPreLoader/AppPreLoader';
import AppLoader from './Components/AppLoader/AppLoader';

const App = () => {

  const [activeLang, setActiveLang] = useState(Lang.langKey);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [loaded, setIsLoaded] = useState(false);

  const langSubcrie = () => Lang.subscribe(activeLang => {
    Lang.langKey = activeLang;
    setActiveLang(activeLang);
    forceUpdate();
  })

  // useEffect(() => {
  //   Lang.getLang(Lang.langKey);
  //   langSubcrie();

  //   return () => langSubcrie.unsubscribe();
  // }, []);

  return (

    <div className="App">

      {/* <AppLoader/> */}
      <AppHeader />
      <AffiliateProgram onSetLoaded={(value) => setIsLoaded(value)} />
      {loaded ? <>
        <Benefits />
        <Commisions />
        <div className='con-4'>
          <Carousels />

        </div>
        <WhyUs />
        <Faq />
        <ContactUs />
        <AppFooter />
      </>
        :
        <AppPreLoader />}
    </div>

  );
}

export default App;
