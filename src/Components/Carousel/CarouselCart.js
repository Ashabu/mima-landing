import React from "react";

const CarouselCart = (props) => {
    const { title, description, } = props.item;

    return (
        <div className='cart' >
            <p>
                <a target='_blank' href='https://www.google.com'>{title['en']}</a>
            </p>
            <div className='cart-desc'>
                <p>{description['en']}</p>
            </div>


        </div>
    );
};

export default CarouselCart;