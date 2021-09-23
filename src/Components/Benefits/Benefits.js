import React from 'react';
import './benefits.scss';
import Benefit from './Benefit';

const benefits = [
    {
      imgUrl: '../../Assets/images/benefits/support.svg',
      content: 'Professional support round the clock'
    },
    {
      imgUrl: '../../Assets/images/benefits/lifetime.svg',
      content: 'Lifetime revenue'
    },
    {
      imgUrl: '../../Assets/images/benefits/coins.svg',
      content: 'No hidden costs'
    },
    {
      imgUrl: '../../Assets/images/benefits/star.svg',
      content: 'The best stats breakdown in the business'
    },
    {
      imgUrl: '../../Assets/images/benefits/ribbon.svg',
      content: 'No Negative Carryover (Yay)'
    },
    {
      imgUrl: '../../Assets/images/benefits/discount.svg',
      content: 'Industry leading commission'
    },
  ]


const Benefits = () => {
    return (
        <div className = 'con-2'>
            <div className = 'benefits-wrap'>
                {benefits.map((item, index) => (
                    <Benefit key={index} benefit={item} />
                ))}
            </div>
        </div>
    );
};

export default Benefits;