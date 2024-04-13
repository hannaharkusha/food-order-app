import React from 'react'

function OrderButton(props){
    return (<button className ='order-button'
                    onClick={props.onClick}
                    style={{ width: props.width }}
                    color={{backgroundColor: props.color}}>
        {props.buttonText}
    </button>)
}

export default OrderButton;