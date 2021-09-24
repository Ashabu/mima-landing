import React from 'react';
import './contactUs.scss';


const ContactUs = () => {
    return (
        <div className='con-7'>
            <div className='contact-us'>
                <div className='contact-us-head' >
                    <h2>Contact Us</h2>
                </div>
                <div className='contact-us-body'>
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='Surname' />
                    <input type='text' placeholder='Email' />
                    <textarea type='text-area' placeholder='Message' />
                </div>
                <div className='btn'>
                    <button className=''>Send</button>
                </div>
                <div style={{color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span>You can also contact us via E-mail   
                    <span style={{color: '#ff7a00'}}> affiliates@mima-poker.com </span> or Skype
                    </span> 
                    <a target='_blank' href = 'https://join.skype.com/invite/FZdRfNhJwnau'> <img style = {{width: 30}} src="https://img.icons8.com/color/48/000000/skype--v3.png"/> </a>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactUs;