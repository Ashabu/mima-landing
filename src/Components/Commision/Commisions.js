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

const Commisions = () => {
    return (
        <div className='con-3'>
            <div className='commission-section'>
                <div className='aff-content'>
                    <h3>Commision</h3>
                    <p>
                        By teaming up with us, Mima Casino gives you value for every hard earned buck. You can earn up to 40% revenue share or we can give you a CPA deal – whatever is convenient for you.
                    </p>
                </div>
                <div className='digits-wrap'>
                    {commissions.map((item, index) => (
                        <Comission key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Commisions;