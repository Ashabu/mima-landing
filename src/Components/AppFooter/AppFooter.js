import React from "react";
import './appFooter.scss';

const Partners = [
    

]

const AppFooter = () => {
    return (
        <footer>
            <div className='con-8'>
                <div className='footer-top'>
                    <div className='partners'>
                        <div className='partners-wrap'>
                            {Partners.map((item, index) => (
                                <div className='partner-logo' key={index}>
                                    <img src={item.url} alt='logo' />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className='footer-bottom'>
                    <div className='footer-bottom-left'>
                        <div className='license'>
                            <div className='seal'>
                                <a target='_blank' href="https://validator.antillephone.com/validate?domain=www.mima.games&seal_id=f99f8774c37b3f9360d0a72be4b3148ea3e6cb86ad75728f48326d4b324b3e6000cab5d1ac0331f67c658fba572929c8&stamp=c7a7839cdf65d1fc84f8d1227ac2586c">
                                    <img src='../../Assets/images/seal.png' />
                                </a>
                            </div>
                            <div className='adult-sign'>
                                <span>
                                    <img src='../../Assets/images/adult-sign.svg' alt='' />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='footer-bottom-right'>
                        <div className='disclamer'>
                            <div className='disclamer-text'>
                                "Mima.com is operated by SG International N.V., which is registered in Heelsumstraat 51 E-Commerce Park, Curacao, registration No. 137028 and having a gaming licence No.8048/JAZZ2015-035 and all rights to operate the gaming software. SG International LP, with its registered address Suite 1 4 Queen Street, Edinburgh, United Kingdom, EH2 1JE, registration No. SL023302, is providing payment services as an agent according to the licence agreement concluded between SG International LP and SG International N.V."
                            </div>
                        </div>
                        <div className='copyright'>
                            <div className='copyright-text'>© Mima. All rights reserved. </div>
                            <span >Developed by  <a href="https://www.softgamings.com/" target="_blank" rel="nofollow noopener">SoftGamings</a></span>

                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;