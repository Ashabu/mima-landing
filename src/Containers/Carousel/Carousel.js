import React, { useState, Fragment } from "react";
import Carousel from 'react-grid-carousel'
import './carousel.scss';
import CarouselCart from "../../Components/Carousel/CarouselCart";

const Testimonials = [
    {
        id: 1,
        title: 'Lorem Ipsum 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas'
    },
    {
        id: 2,
        title: 'Lorem Ipsum 2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 3,
        title: 'Lorem Ipsum 3',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 4,
        title: 'Lorem Ipsum 4',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 5,
        title: 'Lorem Ipsum 5',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 6,
        title: 'Lorem Ipsum 6',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 7,
        title: 'Lorem Ipsum 7',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 8,
        title: 'Lorem Ipsum 8',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 9,
        title: 'Lorem Ipsum 9',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    }
]





const Carousels = (props) => {


    return (
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h3 className='title'>Testimonials</h3>
            <Carousel cols={3} rows={1} gap={20} loop>
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