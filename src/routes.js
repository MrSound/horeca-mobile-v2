import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';

// Auth
import CheckAuth from './components/authenticate/CheckAuth'
import SignIn from './components/authenticate/SignIn'
// import SignOut from './components/auth/SignOut'
// App
// import App from './components/App';
// import Catalog from './components/shop/Catalog'
// import ItemDetail from './components/shop/ItemDetail'
// import BottomNavMenu from './components/BottomNavigationMenu';
import Customer from './components/customer';
import Order from './components/order';
import More from './components/more';

export default (
    <BrowserRouter >
        <div>
            <Switch>
                <Route path='/' component={SignIn} exact />
                <Route path='/signin' component={SignIn} exact />
                {/* <Route path='/signout' component={SignOut} exact />
                <App>
                    <Route path='/catalog' component={CheckAuth(Catalog)} />
                    <Route path='/itemDetail' component={CheckAuth(ItemDetail)} />
                </App> */}
                <Route path='/order' component={CheckAuth(Order)} exact />
                <Route path='/customer' component={CheckAuth(Customer)} exact />
                <Route path='/more' component={CheckAuth(More)} exact />
            </Switch>
        </div>
    </BrowserRouter>
);