import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from "react-router-dom";
import BottomNavMenu from '../BottomNavigationMenu';

class Customers extends React.Component {
    render() {
        document.body.style.backgroundColor = '#FFF';
        return (
            <div>
                <div>customer</div>
                <BottomNavMenu />
            </div>
        );
    }
}

export default Customers;