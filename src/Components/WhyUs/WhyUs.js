import React, { useEffect, useImperativeHandle, useState } from 'react';
import './whyUs.scss';
import WhyUsItem from './WhyUsItem';
import Marketing from '../../Services/MarketinToolsServices';
import AppLoader from '../AppLoader/AppLoader';



const WhyUs = () => {
    const [marketingTool, setMarketingTool] = useState();
    const [bgImg, setBgImg ] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        GetMarketingTools();
    }, [])

    const GetMarketingTools = () => {
        Marketing.GetMarketingTools().then(res => {
            if (res.data.success) {
                setMarketingTool(res.data.data.tools);
                setBgImg(res.data.data.images);
                setIsLoaded(true);
            } else {
                setIsLoaded(true);
            }

        }).catch(e => {
            console.log(e)
        })
    };

    return (

        <div className='con-5'  style={{backgroundImage: `url(${bgImg?.imgUrl})`}}>
            {isLoaded ?
                <div className='why-us-wrap'>
                    <div className='aff-content'>
                        {marketingTool?.map((item, i) => (
                            <WhyUsItem key={i} data={item} />
                        ))}
                    </div>
                </div>
                :
                <AppLoader />}
        </div>

    );
};

export default WhyUs;