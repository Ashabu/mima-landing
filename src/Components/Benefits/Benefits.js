import React, { useState, useEffect } from 'react';
import './benefits.scss';
import Benefit from './Benefit';
import BenefitsServices from '../../Services/BenefitsServices';
import AppLoader from '../AppLoader/AppLoader';




const Benefits = () => {
  const [benefits, setBenefits] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    GetBenefit();
  }, []);

  const GetBenefit = () => {
    BenefitsServices.GetBenefits().then(res => {
      if (res.data.success) {
        setBenefits(res.data.data.benefits);
        setIsLoaded(true);
      } else {
        setIsLoaded(true);
      }
    }).catch(e => {
      console.log('error', e);
      //setIsLoaded(true);
  });
  }
  return (
    <div className='con-2'>
      {isLoaded ?
        <div className='benefits-wrap'>
          {benefits?.map((item, index) => (
            <Benefit key={index} benefit={item} />
          ))}
        </div>
        :
        <AppLoader />
      }
    </div>
  );
};

export default Benefits;