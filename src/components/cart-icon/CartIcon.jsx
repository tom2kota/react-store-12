import React, {useContext} from "react";
import {ReactComponent as ShoppingIcon} from "../../images/shopping-bag.svg";
import {CartContext} from "../../providers/cart/cartProvider";
import './CartIcon.scss';

export const CartIcon = () => {
    const {toggleHidden, cartItemsCount} = useContext(CartContext)

    return (
        <div className='cart-icon' onClick={toggleHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartItemsCount}</span>
        </div>
    )
}
