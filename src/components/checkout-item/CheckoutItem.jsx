import React, {useContext} from "react";
import {CartContext} from "../../providers/cart/cartProvider";
import './CheckoutItem.scss'

export const CheckoutItem = ({cartItem}) => {
    const {name, image, price, quantity} = cartItem
    const {addItem, removeItem, clearItemFromCart} = useContext(CartContext)

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={image} alt='item'/>
            </div>
            <span className='name'>{name}</span>

            <span className='quantity'>
                 <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'> {quantity}</span>
             <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>

            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}
