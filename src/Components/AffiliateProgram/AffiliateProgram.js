import React from "react";
import './affiliateProgram.scss';

const AffiliateProgram = () => {
    return (
        <div className='con-1'>
            <div className='baner-wrap'>
                <div className='baner-bg'>
                    <img src='../../Assets/images/baner/banner-aff-back.jpg' />
                </div>
                <div className='afiliate-animate'>
                    <div className='title'> The official Mima Affiliate program</div>
                    <div></div>
                    <div className='title-bot'>And 100 Free spins + Secret Daily Bonuses</div>
                    <a href="https://affiliates.mima.games/en/Register" >Join now</a>
                </div>
                <div className='baner left-animation'>
                    <img src='../../Assets/images/baner/banner-zoo.png' />
                </div>
                <div className='baner right-animation'>
                    <img src='../../Assets/images/baner/banner-mag.png' />

                </div>
            </div>
        </div>
    );
};

export default AffiliateProgram;