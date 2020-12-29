import React, {lazy, Suspense} from "react";
import {Route} from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import './ShopPage.scss';

const CollectionsOverview = lazy(() => import('../../components/collections-overview/CollectionsOverview'))
const CollectionPage = lazy(() => import('../collection/CollectionPage'))

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Suspense fallback={<Spinner/>}>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </Suspense>
    </div>
)

export default ShopPage
