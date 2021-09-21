import React, { useState } from 'react';
import './App.scss';
import AppHeader from './Components/AppHeader';
import Benefit from './Components/Benefit';
import Carousel from './Containers/Carousel/Carousel';

const Benefits = [
  {
    imgUrl: './Assets/images/benefits/support.svg',
    content: 'Professional support round the clock'
  },
  {
    imgUrl: './Assets/images/benefits/lifetime.svg',
    content: 'Lifetime revenue'
  },
  {
    imgUrl: './Assets/images/benefits/coins.svg',
    content: 'No hidden costs'
  },
  {
    imgUrl: './Assets/images/benefits/star.svg',
    content: 'The best stats breakdown in the business'
  },
  {
    imgUrl: './Assets/images/benefits/ribbon.svg',
    content: 'No Negative Carryover (Yay)'
  },
  {
    imgUrl: './Assets/images/benefits/discount.svg',
    content: 'Industry leading commission'
  },
]

const App = () => {



  return (
    <div className="App">

      <AppHeader />
      <div className='con-4'>
        <Carousel />

      </div>
      <div className='con-1'>
        <div className='content'>
          <h1>The official Mima Affiliate program</h1>
          <p>And 100 Free spins + Secret Daily Bonuses</p>
          <a href=''>Join now</a>
        </div>
      </div>
      <div className='con-2'>
        <div className='benefits-wrap'>
          {Benefits.map((item, index) => (
            <Benefit key={index} benefit={item} />
          ))}
        </div>
      </div>
      <div className='con-3'>
        <div className='commission-section'>
          <div className='aff-content'>
            <h3>Commision</h3>
            <p>
              By teaming up with us, Mima Casino gives you value for every hard earned buck. You can earn up to 40% revenue share or we can give you a CPA deal – whatever is convenient for you.
            </p>

          </div>
          <div className='digits-wrap'>
            <div className='digits-item'>
              <div className='digits-main'>
                <span>25%</span>
              </div>
              <div className='digits-separator'></div>
              <div className='digits-description'>$0-5000</div>
            </div>
            <div className='digits-item'>
              <div className='digits-main'>
                <span>30%</span>
              </div>
              <div className='digits-separator'></div>
              <div className='digits-description'>$5001-10 000</div>
            </div>
            <div className='digits-item'>
              <div className='digits-main'>
                <span>35%</span>
              </div>
              <div className='digits-separator'></div>
              <div className='digits-description'>$10 001-25 000</div>
            </div>
            <div className='digits-item'>
              <div className='digits-main'>
                <span>40%</span>
              </div>
              <div className='digits-separator'></div>
              <div className='digits-description'>$25 000-or more</div>
            </div>
          </div>
          <div className='aff-content'>
            <p>
              <a href=''><span>Become a partner</span></a>
            </p>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
