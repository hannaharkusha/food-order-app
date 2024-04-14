import React from "react";

function Delivery(props){
    return (
        <div className='delivery-box' id='delivery'>
            <div className='delivery-small'>
                <div className='delivery-left'>
                    <div className='delivery-header'>Delivery details</div>
                    <input placeholder='Enter your zip-code'/>
                    <div className='delivery-info'></div>
                </div>
                <div className='delivery-right' id='contact'>
                    <div className='delivery-header'>Contact</div>
                    <div className='working-hours'>
                        {props.hours.map(hour => (
                            <div><span>{hour[0]}</span>{hour[1]}</div>
                        ))}
                    </div>
                    <div className="delivery-right-bottom">
                        <div className='location'>{props.location}</div>
                        <div className='number'>{props.phone}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery