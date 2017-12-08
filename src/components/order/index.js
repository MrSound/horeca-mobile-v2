import React from 'react';

import BottomNavMenu from '../bottom/BottomNavigationMenu';
import SearchBar from '../util/SearchBar';
import SKUList from '../order/SKUList';
import SubMenu from './SubMenu';

class Order extends React.Component {
    render() {
        document.body.style.backgroundColor = '#FFF';
        return (
            <div>
                <SearchBar subMenuHeight={104}>
                    <SubMenu />
                </SearchBar>
                <SKUList />
                <BottomNavMenu activeMenu={1} />
            </div>
        );
    }
}

export default Order;