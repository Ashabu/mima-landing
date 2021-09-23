import React from 'react';

const Comission = (props) => {
    const {title, desc } = props.item;

    return (
        <div className = 'digits-item'>
            <div className = 'digits-main'>
                <span>{title}</span>
            </div>
            <div className = 'digits-separator'></div>
            <div className = 'digits-description'>{desc}</div>
        </div>
    );
};

export default Comission;