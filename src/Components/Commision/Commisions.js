import React from 'react';
import './comission.scss';
import Comission from './Comission';

const commissions = [
    {
        title: '25%',
        desc: '$0-5000',

    },
    {
        title: '30%',
        desc: '$5001-10 000',

    },
    {
        title: '35%',
        desc: '$10 001-25 000',

    },
    {
        title: '40%',
        desc: '$25 000-or more',

    },
]

const Commisions = (props) => {
    return (
        <div className='con-3'>
            <div className='commission-section'>
                <div className='aff-content'>
                    <h3 className='title'>Commision</h3>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p className='title-bot'>
                        By teaming up with us, Mima Casino gives you value for every hard earned buck. You can earn up to 60% revenue share or we can give you a CPA deal – whatever is convenient for you.
                    </p>
                    <div className='digits-wrap'>
                        <div className='digits-item'>
                            <div className='digits-main'>
                                <span>up to </span>
                                <span>60%</span>
                            </div>
                            <div className='digits-separator'></div>
                            <div className='digits-description'></div>
                        </div>
                    </div>
                </div>
                <div className='aff-content' style={{ margin: '40px auto 0 auto' }}>
                    <p>
                        <a href={`https://affiliates.mima.games/${props.activeLang}/Register`} ><span className="wlc-btn__text">Become a partner</span></a>
                    </p>

                </div>


            </div>
        </div>
    );
};

export default Commisions;