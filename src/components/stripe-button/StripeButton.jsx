import React from "react"
import axios from "axios"
import StripeCheckout from "react-stripe-checkout"
import imgLogo from './static/media/logo192.png'

export const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publicKey = 'pk_test_51HUdpkACECHr7zdXSvwikJSLZvvzenT76gVosm1ut8CR8r5n2c6VZA8V58p4MoWcMpxtztuOeo2poQ9xWESfUvuH00ETkLW0Xj';

    // POST request to backend API
    const onToken = token => {
        // const urlDevelopment = 'http://localhost:5000/'
        const urlProduction = 'https://react-store-express-server.herokuapp.com/'
        console.log('onToken ...', token)
        axios({
            url: `${urlProduction}payment`,
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            console.log(response)
            alert('Payment Successful')
        }).catch(
            error => {
                console.log(error)
                alert('Payment error')
            }
        )
    }

    return (
        <StripeCheckout
            label='&#x1F4B3; Pay with Stripe'
            name='React Store'
            billingAddress
            shippingAddress
            image={imgLogo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publicKey}
        />
    )
}
