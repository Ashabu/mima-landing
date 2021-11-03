import React,{useState, useEffect} from 'react';
import './contactUs.scss';
import Links from '../../Services/CommonServices';


const ContactUs = () => {
    const [skypeLink, setSkypeLink] = useState('');

    useEffect(() => {
        
        getSkypeLink();
    }, []);
    const getSkypeLink = () => {
        Links.GetLinks().then(res => {
            if (res.data.success) {
                setSkypeLink(res.data.data.link[0].description)
            }
        })
        .catch(e => {
            console.log(e)
        })
    }
    return (
        <div className='con-7'>
            <div className='contact-us'>
                <div className='contact-us-head' >
                    <h3 className = 'title-top'>Contact Us</h3>
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
                    <a target='_blank' href = {skypeLink}> <img style = {{width: 30}} src="https://img.icons8.com/color/48/000000/skype--v3.png"/> </a>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactUs;