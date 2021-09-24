import React, {useState} from "react";
import './appHeader.scss';
import Lang from '../../Services/LanguageService';
import { Langs } from '../../Constants/Lang';

let langs = [];

const HeaderItems = [
    {
        title: 'Home Page',
        href: 'https://mima.games/en/'
    },
    {
        title: 'Casino',
        href: 'https://mima.games/en/'
    },
    {
        title: 'Live Casino',
        href: 'https://mima.games/en/catalog/livecasino'
    },
    {
        title: 'Promotions',
        href: 'https://mima.games/en/promotions/'
    },
    {
        title: 'Tournaments',
        href: 'https://mima.games/en/tournaments/'
    },
    {
        title: 'Contact Us',
        href: 'https://mima.games/en/contacts/feedback/'
    },
]

const AppHeader = () => {
    

    langs = Object.entries(Langs);

    const [choseLang, setChoseLang] = useState(false);
    const [currentLang, setCurrentLang] = useState(langs);

    const handleChangeLang = () => {
        console.log(langs)
        setCurrentLang(lang => {
            let nextEl = lang[0];
            lang[0] = lang[1];
            lang[1] = nextEl;
            return lang;
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
                <div className='app-mid-content'>
                    <div className='app-menu-content'>
                        <div className='app-menu'>
                            <div className='app-menu-1'>
                                {HeaderItems.map((item, index) => (
                                    <div key={index} className='app-menu-item-wrap'>
                                        <div className='app-menu-item'>
                                            <a href={item.href} ><span>{item.title}</span></a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex', alignItems: 'center'}}>

                
                <div className='app-login-signup '>
                    <button>
                        <span className='btn-text'>Login</span>
                    </button>
                    <button>
                        <span className='btn-text'>Sign Up</span>
                    </button>
                </div>
                <div className='lang' onClick={() => setChoseLang(!choseLang)} tabIndex='1'>
                <span>
                    <img src = {`../../Assets/images/flag-${Lang.langKey}.svg`} />
                </span>
                {choseLang ? <div className='selectLang'  >
                    <span onClick={handleChangeLang}>
                    <img src = {`../../Assets/images/flag-${currentLang[0][1]}.svg`} />
                    </span>
                </div> : null}
            </div>
            </div>
                <div className='for-mobile'>
                    <span>
                        <img src='../../Assets/images/Login-icon.svg' alt='login' />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;

