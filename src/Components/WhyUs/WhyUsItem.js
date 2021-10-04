import React from 'react';
import './whyUs.scss';

const WhyUsItem = (props) => {
    const { title, desc } = props.data;


    return (
        <div className='why-us-cart'>
            <div className='why-us-cart-title'>
                <h3 className='title-top'>{title}</h3>
            </div>
            <div className = 'why-us-cart-body'>
                <p className='subtitle-bot' style={{maxWidth: '108ch'}}>{desc}</p>
            </div>
        </div>

    );
};

export default WhyUsItem;