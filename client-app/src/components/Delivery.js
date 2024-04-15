import React from "react";

function Delivery(props){
    return (
        <div className='delivery-box' id='delivery'>
            <div className='delivery-small'>
                <div className='delivery-left'>
                    <div className='delivery-header'>Delivery details</div>
                    <div className='delivery-cost'>Delivery cost:{props.cost}</div>

                    <div className='delivery-info'>Delivery details can be entered here. This space is customizable and can accommodate any relevant information pertaining to your delivery, such as timing preferences, special instructions, or additional notes.</div>
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