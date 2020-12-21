import React from "react";
import {CollectionItem} from "../collection-item/CollectionItem";
import {withRouter} from 'react-router-dom';
import './CollectionPreview.scss';

const CollectionPreview = ({title, items, history, match, routeName}) => (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 3)
                .map((item) =>
                    <CollectionItem key={item.id} item={item}/>
                )}
        </div>
    </div>
)

export default withRouter(CollectionPreview)
