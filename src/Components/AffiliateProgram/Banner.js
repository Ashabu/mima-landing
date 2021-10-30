import React from 'react';

const Banner = (props) => {
    return (
        <div className = 'aff-banner-wrap'>
            <div className = 'banner-bg'>
                <img src = {props.imgUrl}/>
            </div>
            
        </div>
    );
};

export default Banner;