import { connect } from 'react-redux';
import React from 'react';

import * as actions from '../../actions';
import CustomerListItem from './CustomerListItem';

class CustomerList extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <div>
                    <CustomerListItem />
                    <CustomerListItem />
                    <CustomerListItem />
                    <CustomerListItem />
                    <CustomerListItem />
                    <CustomerListItem />
                    <CustomerListItem />
                    <CustomerListItem />
                    <CustomerListItem />
                    <CustomerListItem />
                    <CustomerListItem />
                    <CustomerListItem />
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