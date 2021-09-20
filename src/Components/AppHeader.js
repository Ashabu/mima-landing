import React from "react";


const AppHeader = () => {
    return (
        <div className='app-header'>
            <img src='../Assets/images/logo.svg' alt='logo' />
            <div className='action-btns'>
                <button>Login</button>
                <button>Sing Up</button>
            </div>
        </div>
    );
};

export default AppHeader;
