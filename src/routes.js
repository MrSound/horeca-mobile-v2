import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';

// Auth
import CheckAuth from './components/authenticate/CheckAuth'
import SignIn from './components/authenticate/SignIn'


import DetchResolution from './components/util/DetectResolution'
// import SignOut from './components/auth/SignOut'
// App
// import App from './components/App';
// import Catalog from './components/shop/Catalog'
// import ItemDetail from './components/shop/ItemDetail'
// import BottomNavMenu from './components/BottomNavigationMenu';
import Customer from './components/customer';
import Order from './components/order';
import More from './components/more';
import Cart from './components/cart';

export default (
    <BrowserRouter >
        <div>
            <Switch>
                <Route path='/' component={DetchResolution(SignIn)} exact />
                <Route path='/signin' component={DetchResolution(SignIn)} exact />
                {/* <Route path='/signout' component={SignOut} exact />
                <App>
                    <Route path='/catalog' component={CheckAuth(Catalog)} />
                    <Route path='/itemDetail' component={CheckAuth(ItemDetail)} />
                </App> */}
                <Route path='/order' component={CheckAuth(DetchResolution(Order))} exact />
                <Route path='/customer' component={CheckAuth(DetchResolution(Customer))} exact />
                <Route path='/more' component={CheckAuth(DetchResolution(More))} exact />
                <Route path='/cart' component={CheckAuth(DetchResolution(Cart))} exact />
            </Switch>
        </div>
    </BrowserRouter>
);