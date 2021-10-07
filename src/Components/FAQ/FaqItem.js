import React, { useState } from "react";
const contentOpen = {
    opacity: 1,
    overflow: 'initial'
}

const contentClosed = {
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 0,
    overflow: 'hidden'
}
const FaqItem = (props) => {
    const [active, setActive] = useState(false)
    const tt = (index) => {
        setActive(!active); 
        // let a = document.getElementsByClassName(`faq-item ${index}`);
        // let img = document.getElementById(`img ${index}`);
        // a[0].classList.toggle('active')
        // img.classList.toggle('active')
    }
    const { title, desc } = props.item
    return (
        <div className = 'faq-item' onClick = {tt}>
            <div className = 'faq-item-row'>
                <div className = 'faq-item-header'>{title}</div>
                <div className='arrow-icon'>
                    <span>
                        <img className = {active? 'active' : ''} src='../Assets/images/arrow.svg' alt='' />
                    </span>
                </div>
            </div>
            <div className='faq-content' style={active? contentOpen : contentClosed }>
                <div className = 'faq-item-desc'>
                    {desc}
                </div>
            </div>
        </div>










        // <div className={'faq-item ' + props.index} onClick={() => tt(props.index)}>
        //     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
        //         <div className='faq-title'>{title}</div>
        //         <div className='arrow-icon'>
        //             <span>
        //                 <img id={'img ' + props.index} src='../Assets/images/arrow.svg' alt='' />
        //             </span>
        //         </div>
        //     </div>
        //     <div className='expand'>
        //         {desc}
        //     </div>
        // </div>
    );
};

export default FaqItem;