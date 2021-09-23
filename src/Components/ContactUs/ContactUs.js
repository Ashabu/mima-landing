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
            </div>
        </div>
    );
};

export default ContactUs;