import React from "react";

const CarouselCart = (props) => {
    const { title, desc, } = props.item;

    return (
        <div className='cart' >
            <p>
                <a target='_blank' href = ''>{title}</a>
                </p>
            <div className = 'cart-desc'>
            <p>{desc}</p>
            </div>
            

        </div>
    );
};

export default CarouselCart;