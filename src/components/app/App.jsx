import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Homepage} from "../../pages/home/Homepage";
import {ShopPage} from "../../pages/shop/ShopPage";
import {Header} from "../header/Header";
import {SignInUp} from "../../pages/sign-in-up/SignInUp";
import {ContactPage} from "../../pages/contact/ContactPage";
import {CheckoutPage} from "../../pages/checkout/CheckoutPage";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import {UserContext} from "../../contexts/user/userContext";

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
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/shop" component={ShopPage}/>
                        <Route path="/contact" component={ContactPage}/>
                        <Route exact path="/signin"
                               render={() => this.state.currentUser ? <Redirect to='/'/> : <SignInUp/>}/>
                        <Route exact path="/checkout" component={CheckoutPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
