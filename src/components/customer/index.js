import React from 'react';

import BottomNavMenu from '../bottom/BottomNavigationMenu';
import CustomerList from './CustomerList';
import SearchBar from '../util/SearchBar';

class Customer extends React.Component {
    render() {
        document.body.style.backgroundColor = '#FFF';
        return (
            <div>
                <SearchBar />
                <CustomerList />
                <BottomNavMenu activeMenu={3} />
            </div>
        );
    }
}

export default Customer;