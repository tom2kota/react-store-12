import React, {useContext} from "react";
import {CollectionItem} from "../../components/collection-item/CollectionItem";
import {ShopDataContext} from "../../contexts/shop/shopContext";
import './CollectionPage.scss'

export const CollectionPage = ({match}) => {
    const collections = useContext(ShopDataContext)
    const collection = collections[match.params.collectionId]
    const {title, items} = collection

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (<CollectionItem key={item.id} item={item}/>))}
            </div>
        </div>
    )
}
