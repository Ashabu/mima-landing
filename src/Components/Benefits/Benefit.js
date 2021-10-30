import React from "react";

const Benefit = (props) => {
    const { benefit} = props
    return (
        <div className = 'benefit-item'>
            <div className = 'item-icon'>
                <img src = {benefit?.imgUrl} alt='icon' />
            </div>
            <div className = 'item-content'>
                <span>{benefit?.description.en}</span>
            </div>
        </div>
    );
};

export default Benefit;