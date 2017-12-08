import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class CustomerListItem extends React.Component {
    render(){
        return (
            <div>Customer List Item</div>
        );
    }
}
function mapStateToProps(state) {
    return {
        role: state.auth.role,
    }
}
export default connect(mapStateToProps, actions)(CustomerListItem);