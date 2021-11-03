import React, { useState, useEffect } from "react";
import './affiliateProgram.scss';
import Affiliate from '../../Services/AffiliateService';
import Carousel from 'react-grid-carousel'
import Banner from './Banner.js';

const AffiliateProgram = (props) => {

    const [affiliateInfo, setAffiliateInfo] = useState();
    const [banners, setBanners] = useState()

    useEffect(() => {
        GetAffiliateInfo();

    }, [])

    const GetAffiliateInfo = () => {

        Affiliate.GetAffiliateInfos().then(res => {
            if (res.data.success) {
                setAffiliateInfo(res.data.data.affiliates[0]);
                setBanners(res.data.data.images)
                props.onSetLoaded(true);
            } else {
            }
        }).catch(e => {
            console.log('error', e);
            props.onSetLoaded(true);
        });
    };


    return (
        <div className='con-1'>
            <div className='baner-wrap'>
                {banners?.length > 1 ?
                    <Carousel cols={1} rows={1} gap={20} loop autoplay={5000} points={true}>
                        {banners.map((img, index) => (
                            <Carousel.Item key={index} >
                                <Banner imgUrl={img.imgUrl} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    :
                    <Banner imgUrl={banners?.[0]?.imgUrl} />}


                <div className='afiliate-animate1'>
                    <div className='baner-title'> {affiliateInfo?.title['en']}</div>
                    <div></div>
                    <div className="baner-subtitle">{affiliateInfo?.subTitle['en']}</div>
                    <a href="https://affiliates.mima.games/en/Register" >Join now</a>
                </div>

            </div>
        </div>
    );
};

export default AffiliateProgram;