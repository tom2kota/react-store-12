import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './components/app/App';
import {CartProvider} from "./providers/cart/cartProvider";
import {GlobalStyle} from "./globalStyles";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <CartProvider>
            <BrowserRouter>
                <GlobalStyle/>
                <App/>
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
