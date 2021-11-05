import React, { useState, useEffect } from "react";
import Carousel from 'react-grid-carousel'
import './carousel.scss';
import CarouselCart from "../../Components/Carousel/CarouselCart";
import Testimonial from "../../Services/TestimonialServices";
import AppLoader from "../../Components/AppLoader/AppLoader";






const Carousels = () => {

    const [testimonials, setTestimonials ] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getTestimonials();
    }, [])

    const getTestimonials = () => {
        Testimonial.GetTestimonials().then(res => {
            if(res.data.success) {
                setTestimonials(res.data.data.testimonials);
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
        <div style={{ maxWidth: 1024, margin: '0 auto' }}>
           { isLoaded?
           <>
            <h3 className = 'title-top'>Testimonials</h3>
            <Carousel cols={3} rows={1}  loop autoplay = {5000} points={true}>
                {testimonials.map((item, index) => (
                    <Carousel.Item key={index}>
                        <CarouselCart item={item} i ={index} />
                    </Carousel.Item>
                ))}
            </Carousel>
            </>
            :
            <AppLoader/>}
        </div>
    )
};

export default Carousels