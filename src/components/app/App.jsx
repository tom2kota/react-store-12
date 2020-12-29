import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Header} from "../header/Header";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import {UserContext} from "../../contexts/user/userContext";

const HomePage = lazy(() => import('../../pages/home/HomePage'))
const ShopPage = lazy(() => import('../../pages/shop/ShopPage'))
const ContactPage = lazy(() => import('../../pages/contact/ContactPage'))
const SignInUp = lazy(() => import('../../pages/sign-in-up/SignInUp'))
const CheckoutPage  = lazy(()=>import('../../pages/checkout/CheckoutPage'))

export class App extends Component {
    state = {currentUser: null}
    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth)
                    userRef.onSnapshot(snapshot => this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }))
                } else {
                    this.setState({currentUser: userAuth})
                }
            }
        );
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        console.log('this.state.currentUser: ', this.state.currentUser)
        return (
            <div>
                <BrowserRouter>
                    <UserContext.Provider value={this.state.currentUser}>
                        <Header/>
                    </UserContext.Provider>
                    <Switch>
                        <Suspense fallback={<div>Loading ...</div>}>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/shop" component={ShopPage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route exact path="/signin"
                                   render={() => this.state.currentUser ? <Redirect to='/'/> : <SignInUp/>}/>
                            <Route exact path="/checkout" component={CheckoutPage}/>
                        </Suspense>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
