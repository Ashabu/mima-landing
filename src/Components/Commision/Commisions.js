import React, {useState, useEffect} from 'react';
import './comission.scss';
import Comission from './Comission';
import AppLoader from '../AppLoader/AppLoader';
import Commissions from '../../Services/CommissionsService';
import Benefits from '../Benefits/Benefits';
 




const Commisions = (props) => {
    const [commissions, setCommissions] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    

useEffect(() => {
    GetCommissions();

}, [])  

const GetCommissions = () => {

    Commissions.GetCommisions().then(res => {
        if (res.data.success) {
            setCommissions(res.data.data.commissions[0]);
            setIsLoaded(true);
        } else {
        }
    }).catch(e => {
        console.log('error', e);
    });
};

    return (
        
        <div className='con-3' style={{backgroundImage: `url(${commissions?.imgUrl})`}}>
            
            {isLoaded?
            <>
            <Benefits/>
            <div className='commission-section'>
                <div className='aff-content'>
                    <h3 className = 'title-top'>Commission</h3>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p className='subtitle-bot' style={{maxWidth: '54ch'}}>
                        {commissions?.description['en']}
                    </p>
                    <div className='digits-wrap'>
                    {commissions?.amountRanges.map((item, index) => (
                        <Comission key={index} item={item} />
                    ))}
                    </div>
                </div>
                <div className='aff-content' style={{ margin: '40px auto 0 auto' }}>
                    <p>
                        <a href={`https://affiliates.mima.games/${props.activeLang}/Register`} ><span className="wlc-btn__text">Become a partner</span></a>
                    </p>

                </div>
            </div>
            </>
            : 
        <AppLoader/>}
        </div>
        
    );
};

export default Commisions;