import React, {useContext} from "react";
import {CustomButton} from "../custom-button/CustomButton";
import {CartContext} from "../../providers/cart/cartProvider";
import './CollectionItem.scss'

export const CollectionItem = ({item}) => {
    const {name, price, image} = item
    const {addItem} = useContext(CartContext)

    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${image})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add 2 Cart</CustomButton>
        </div>
    )
}
