import React, { useState, useEffect } from "react";
import './affiliateProgram.scss';
import Affiliate from '../../Services/AffiliateService';
import Carousel from 'react-grid-carousel'
import Banner from './Banner.js';

const AffiliateProgram = (props) => {

    const [affiliateInfo, setAffiliateInfo] = useState();

    useEffect(() => {
        GetAffiliateInfo();

    }, [])

    const GetAffiliateInfo = () => {

        Affiliate.GetAffiliateInfos().then(res => {
            if (res.data.success) {
                setAffiliateInfo(res.data.data.affiliates[0]);
                props.onSetLoaded(true);
            } else {
            }
        }).catch(e => {
            console.log('error', e);
            props.onSetLoaded(true);
        });
    };

    console.log(affiliateInfo?.images.length)

    return (
        <div className='con-1'>
            <div className='baner-wrap'>
                {affiliateInfo?.images.length > 1 ?
                    <Carousel cols={1} rows={1} gap={20} loop autoplay={5000} points={true}>
                        {affiliateInfo?.images.map((img, index) => (
                            <Carousel.Item key={index} >
                                <Banner imgUrl={img.imgUrl} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    :
                    <Banner imgUrl={affiliateInfo?.images[0].imgUrl} />}


                <div className='afiliate-animate1'>
                    <div className='baner-title'> The official Mima Affiliate program</div>
                    <div></div>
                    <div className="baner-subtitle">And 100 Free spins + Secret Daily Bonuses</div>
                    <a href="https://affiliates.mima.games/en/Register" >Join now</a>
                </div>

            </div>
        </div>
    );
};

export default AffiliateProgram;