import React from "react";

const CarouselCart = (props) => {
    const { title, description, linkUrl } = props.item;

    return (
        <div className='cart' >
            <div className='cart-title'>
                <span>
                    <a target='_blank' href={linkUrl}>{title['en']}</a>
                </span>
            </div>
            <div className='cart-desc'>
                <p>{description['en']}</p>
            </div>
        </div>
    );
};

export default CarouselCart;