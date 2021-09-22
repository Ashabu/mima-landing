import React, { useState } from 'react';
import './App.scss';
import AppHeader from './Components/AppHeader';
import Benefit from './Components/Benefit';
import FaqItem from './Components/FaqItem';
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

const FAQ = [
  {
    title: 'Do I need to pay something to join the program?',
    desc: 'Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket! Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket!'
  },
  {
    title: 'Do I need to pay something to join the program?',
    desc: 'Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket! Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket!'
  },
  {
    title: 'Do I need to pay something to join the program?',
    desc: 'Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket! Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket!'
  },
  {
    title: 'Do I need to pay something to join the program?',
    desc: 'Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket! Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket!'
  },
  {
    title: 'Do I need to pay something to join the program?',
    desc: 'Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket! Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket!'
  },
  {
    title: 'Do I need to pay something to join the program?',
    desc: 'Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket! Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket!'
  },
  {
    title: 'Do I need to pay something to join the program?',
    desc: 'Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket! Of course not! It goes other way around, we will be paying for the players you send to us. The more money we make together, the bigger percentage you get to your own pocket!'
  }
]
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
      <div className='con-5'>
        <div className='container'>
          <h3>WHY US</h3>
          <p>More than 80% of the brands on the Internet leverage the power of affiliate marketing. The point we’re trying to make here Asian Poker knows the importance of affiliates, we’ll even go as far as saying and you may quote us: ”With us you’re number one, always!”. You might we wondering what’s the score? If you join know we’ll offer you a revenue share of 25% to 40% commission for a lifetime! A percentage of that fee is based on what your players lose, banking costs and of course a fix fee (%) contributes towards the license fees. As you can see we’re not slamming our affiliates with any hidden costs and no negative carryover; strictly speaking you start each and every month in the black!</p>
          <h3>Marketing tools</h3>
          <p>Furthermore, our affiliate program has all the marketing bells and whistles you’ll ever need, plus we give you a detailed breakdown of the players you referred during the course of the month. In other words everything is transparent! At the heart of it all if you win we win we’re here to help you grow. Our affiliate deals are structured in such a way that it includes CPA, hybrid or revenue share for life.</p>
          <h3>Why Join?</h3>
          <p>By teaming up with us, Mima Casino gives you value for every hard earned buck. You can earn up to 40% revenue share or we can give you a CPA deal – whatever is convenient for you.</p>
        </div>
      </div>
      <div className='con-6'>
        <div className='container'>
          <div className='faq-item-wrap'>
            <div className='faq-header'>FAQ</div>
            {FAQ.map((item, index) => (
              <FaqItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
