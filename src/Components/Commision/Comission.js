import React from 'react';

const Comission = (props) => {
    const {percent, range } = props.item;

    return (
        <div className = 'digits-item'>
            <div className = 'digits-main'>
                <span>{percent}</span>
            </div>
            <div className = 'digits-separator'></div>
            <div className = 'digits-description'>{range}</div>
        </div>
    );
};

export default Comission;