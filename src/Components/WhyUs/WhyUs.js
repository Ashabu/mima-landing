import React from 'react';
import './whyUs.scss';
import WhyUsItem from './WhyUsItem';

const WhYUS = [
    {
        title: 'Why Us',
        desc: 'More than 80% of the brands on the Internet leverage the power of affiliate marketing. The point we’re trying to make here Asian Poker knows the importance of affiliates, we’ll even go as far as saying and you may quote us: ”With us you’re number one, always!”. You might we wondering what’s the score? If you join know we’ll offer you a revenue share of 25% to 40% commission for a lifetime! A percentage of that fee is based on what your players lose, banking costs and of course a fix fee (%) contributes towards the license fees. As you can see we’re not slamming our affiliates with any hidden costs and no negative carryover; strictly speaking you start each and every month in the black!'

    },
    {
        title: 'Marketing Tools',
        desc: 'Furthermore, our affiliate program has all the marketing bells and whistles you’ll ever need, plus we give you a detailed breakdown of the players you referred during the course of the month. In other words everything is transparent! At the heart of it all if you win we win we’re here to help you grow. Our affiliate deals are structured in such a way that it includes CPA, hybrid or revenue share for life.'

    },
    {
        title: 'Why Join',
        desc: 'By teaming up with us, Mima Casino gives you value for every hard earned buck. You can earn up to 40% revenue share or we can give you a CPA deal – whatever is convenient for you.'

    },
]

const WhyUs = () => {
    return (
        <div className='con-5'>
            <div className='why-us-wrap'>
                <div className = 'aff-content'>
                    {WhYUS.map((item, i) => (
                        <WhyUsItem key = {i} data = {item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyUs;