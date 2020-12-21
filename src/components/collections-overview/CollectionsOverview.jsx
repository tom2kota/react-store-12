import React, {useContext} from "react";
import CollectionPreview from "../collection-preview/CollectionPreview";
import {ShopDataContext} from "../../contexts/shop/shopContext";
import './CollectionsOverview.scss';

export const CollectionsOverview = () => {
    const collectionsMap = useContext(ShopDataContext)
    const collections = Object.keys(collectionsMap).map(key => collectionsMap[key])

    return (
        < div
            className='collections-overview'>
            {collections.map(
                ({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} />
            )}
        </div>
    )
}
