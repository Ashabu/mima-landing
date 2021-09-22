import React from "react";

const FaqItem = (props) => {
    const { title, desc } = props.item
    return (
        <div className='faq-item'>
            {title}
            <img src='../Assets/images/arrow.svg' alt='icon' />
        </div>
    );
};

export default FaqItem;