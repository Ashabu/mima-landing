import React from "react";

const Benefit = (props) => {
    const { imgUrl, content } = props.benefit
    return (
        <div className = 'benefit-item'>
            <div className = 'item-icon'>
                <img src = {imgUrl} alt='icon' />
            </div>
            <div className = 'item-content'>
                <span>{content}</span>
            </div>
        </div>
    );
};

export default Benefit;