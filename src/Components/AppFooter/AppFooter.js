import React from "react";
import './appFooter.scss';

const AppFooter = () => {
    return (
        <footer>
            <div className='footer-bottom'>
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
        </footer>
    );
};

export default AppFooter;