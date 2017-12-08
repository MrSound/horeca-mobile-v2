import { connect } from 'react-redux';
import React from 'react';

import * as actions from '../../actions';
import CustomerListItem from './CustomerListItem';

class CustomerList extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <div>
                    <CustomerListItem />1
                    <CustomerListItem />2
                    <CustomerListItem />3
                    <CustomerListItem />4
                    <CustomerListItem />5
                    <CustomerListItem />6
                    <CustomerListItem />7
                    <CustomerListItem />8
                    <CustomerListItem />8
                    <CustomerListItem />8
                    <CustomerListItem />8
                    <CustomerListItem />8
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        role: state.auth.role,
    }
}
export default connect(mapStateToProps, actions)(CustomerList);