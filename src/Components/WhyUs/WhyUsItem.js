import React from 'react';
import './whyUs.scss';

const WhyUsItem = (props) => {
    const { data} = props;


    return (
        <div className='why-us-cart'>
            <div className='why-us-cart-title'>
                <h3 className='title-top'>{data?.title.en}</h3>
            </div>
            <div className = 'why-us-cart-body'>
                <p className='subtitle-bot' style={{maxWidth: '108ch'}}>{data?.description.en}</p>
            </div>
        </div>

    );
};

export default WhyUsItem;