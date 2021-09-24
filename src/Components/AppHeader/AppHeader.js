import React, { useState } from "react";
import './appHeader.scss';
import Lang from '../../Services/LanguageService';
import { Langs } from '../../Constants/Lang';

let langs = [];



const AppHeader = () => {

    const HeaderItems = [
        {
            title: 'Home Page',
            href: `https://mima.games/${Lang.langKey}/`
        },
        {
            title: 'Casino',
            href: `https://mima.games/${Lang.langKey}/`
        },
        {
            title: 'Live Casino',
            href: `https://mima.games/${Lang.langKey}/catalog/livecasino`
        },
        {
            title: 'Promotions',
            href: `https://mima.games/${Lang.langKey}/promotions/`
        },
        {
            title: 'Tournaments',
            href: `https://mima.games/${Lang.langKey}/tournaments/`
        },
        {
            title: 'Contact Us',
            href: `https://mima.games/${Lang.langKey}/contacts/feedback/`
        },
    ]


    langs = Object.entries(Langs);

    const [choseLang, setChoseLang] = useState(false);
    const [currentLang, setCurrentLang] = useState(langs);

    const handleChangeLang = () => {
        setCurrentLang(prevState => {
            return [prevState[1], prevState[0]]
        })

        Lang.getLang(currentLang[1][1]);
        setChoseLang(false);
    }

    return (
        <header>
            <div className='app-header'>
                <div className='app-logo'>
                    <a href=''>
                        <span>
                            <img src='../../Assets/images/logo.svg' alt='logo' />
                        </span>
                    </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>


                    <div className='app-login-signup '>
                        <button>
                            <a href={`https://affiliates.mima.games/${Lang.langKey}`} target='_blank' className='btn-text'> Login</a>
                        </button>
                        <button>
                            <a href={`https://affiliates.mima.games/${Lang.langKey}/Register`} target='_blank' className='btn-text'>Sign Up</a>
                        </button>
                    </div>
                    <div className='for-mobile'>
                        <span>
                            <a href={`https://affiliates.mima.games/${Lang.langKey}`} target='_blank' ><img src='../../Assets/images/Login-icon.svg' alt='login' /></a>
                        </span>
                    </div>
                    <div className='lang' onClick={() => setChoseLang(false)} tabIndex='1'>
                        <span>
                            <img src={`../../Assets/images/flag-${currentLang[0][1]}.svg`} />
                        </span>
                        {choseLang ? <div className='selectLang'  >
                            <span onClick={handleChangeLang}>
                                <img src={`../../Assets/images/flag-${currentLang[1][1]}.svg`} />
                            </span>
                        </div> : null}
                    </div>
                </div>

            </div>
        </header>
    );
};

export default AppHeader;

