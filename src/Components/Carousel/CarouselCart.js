import React from "react";

const CarouselCart = (props) => {
    const { id, title, desc, } = props.item;
    console.log(props.left)

    return (
        <div className='cart' >
            <p>{title}</p>
            <p>{desc}</p>

        </div>
    );
};

export default CarouselCart;