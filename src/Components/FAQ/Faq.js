import React, {useState, useEffect} from 'react';
import './faq.scss';
import FaqItem from './FaqItem';
import Faqs from '../../Services/FaqServices';
import AppLoader from '../AppLoader/AppLoader';


const Faq = () => {
    const [faqs, setFaqs ] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getFaqs();
    }, [])

    const getFaqs = () => {
        Faqs.GetFaqs().then(res => {
            if(res.data.success) {
                setFaqs(res.data.data.faqs);
                setIsLoaded(true);
            } else {
                console.log('Something went wrong');
            }
        })
        .catch(e => {
            console.log(e);
        })
    }

    return (
        <div className='con-6'>

        {isLoaded? 
        <div className='faq-section'>
          <div className='faq-item-wrap'>
            <div className='faq-header'>
                <h3 className = 'title-top'>faq</h3>
            </div>
            {faqs?.map((item, index) => (
              <FaqItem key={index} item={item} index = {index}/>
            ))}
          </div>
        </div>
        :
        <AppLoader/>}
      </div>
    );
};

export default Faq;