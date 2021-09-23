import React from "react";

const CarouselCart = (props) => {
    const { title, desc, } = props.item;

    return (
        <div className='cart' >
            <p>{title}</p>
            <p>{desc}</p>

        </div>
    );
};

export default CarouselCart;