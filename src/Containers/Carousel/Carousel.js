import React, { useState, Fragment } from "react";
import Carousel from 'react-grid-carousel'
import './carousel.scss';
import CarouselCart from "../../Components/Carousel/CarouselCart";

const Testimonials = [
    {
        id: 1,
        title: '',
        desc: 'Amazing, our collaboration has been a success from day one, thanks to the professional team Mima, who wasted no time to answer our questions and assist with technical support. Highly recommended A++'
    },
    {
        id: 2,
        title: '',
        desc: 'We are always happy to recommend Mima Affiliates for no reason but our results with them! Month by month it keeps getting better and people behind it are driven to make change. Invested to improve anything we find the slightest issue with'
    },
    {
        id: 3,
        title: '',
        desc: 'Mima is a fantastic affiliate team. always provides the highest quality service to their partners. The Mima affiliate software is powerful and responsive. We look forward to becoming a productive partner with them for many years to come!'
    },
    // {
    //     id: 4,
    //     title: '',
    //     desc: 'Super stoked to partner up with Mima Affiliate. We look forward to having a very fruitful partnership. The team is very proactive and dedicated to their work.'
    // },
    
]





const Carousels = (props) => {


    return (
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h3 className='title'>Testimonials</h3>
            <Carousel cols={3} rows={1} gap={20} loop autoplay = {5000}>
                {Testimonials.map((item, index) => (
                    <Carousel.Item key={index}>
                        <CarouselCart item={item} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
};

export default Carousels