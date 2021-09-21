import React, { useState, Fragment } from "react";
import './carousel.scss';
import CarouselCart from "../../Components/Carousel/CarouselCart";

const Testimonials = [
    {
        id: 1,
        title: 'Lorem Ipsum1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 2,
        title: 'Lorem Ipsum2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 3,
        title: 'Lorem Ipsum3',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 4,
        title: 'Lorem Ipsum4',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 5,
        title: 'Lorem Ipsum5',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 6,
        title: 'Lorem Ipsum',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 7,
        title: 'Lorem Ipsum',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
    {
        id: 8,
        title: 'Lorem Ipsum',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis turpis orci, sit amet pharetra lorem condimentum in. Nam in placerat leo. Aenean convallis, leo vitae egestas '
    },
]



const cardW = 300;


const Carousel = (props) => {
    const [clickCount, setCklickCount] = useState(0);

    const fn = (index) => {
        return cardW * index - (clickCount * cardW);
    }

    const nextFn = () => {
        setCklickCount(prev => { return prev + 1 })
    }

    return (
        <Fragment>
            <img style={{ width: 60, position: 'absolute', top: 250, right: 450, cursor: 'pointer' }} src='../../Assets/images/arrow.png' alt='' onClick={nextFn} />
            <div className='carousel'>
                <div className='carts-wrap'>
                    {Testimonials.map((item, index) => (
                        <CarouselCart key={item.id} item={item} index={index} left={fn(index)} />
                    ))}
                </div>
            </div>
        </Fragment>
    )
};

export default Carousel;