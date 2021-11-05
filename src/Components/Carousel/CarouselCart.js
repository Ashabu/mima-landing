import React from "react";

const CarouselCart = (props) => {
    const { title, description, linkUrl, i } = props.item;
    const bgImg = (i) => {
        if(i % 3 === 1) {
            return 'url("./../../Assets/images/testimonials/ace-diamond.png")'
        } else if (i % 3 === 2) {
            return 'url("./../../Assets/images/testimonials/ace-heart.png")'
        } else {
            return 'url("./../../Assets/images/testimonials/ace-spade.png")'
        }
    }
    return (
        <div className='cart' style ={{backgroundImage: bgImg(i)}}>
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