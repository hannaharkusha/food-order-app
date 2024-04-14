import React from "react";

function Delivery(props){
    return (
        <div className='delivery-box'>
            <div className='delivery-small'>
                <div className='delivery-left'>
                    <div className='slogan'>Check delivery details</div>
                    <input />
                    <div className='delivery-info'></div>
                </div>
                <div className='delivery-right'>
                    <div className='working-hours'>{props.hours}</div>
                    <div className='location'>{props.location}</div>
                </div>
            </div>
        </div>
    )
}

export default Delivery