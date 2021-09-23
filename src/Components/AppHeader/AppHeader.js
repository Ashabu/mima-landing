import React from "react";
import './appHeader.scss';


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
                <div className='app-login-signup '>
                    <button>
                        <span className='btn-text'>Login</span>
                    </button>
                    <button>
                        <span className='btn-text'>Sign Up</span>
                    </button>
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

