import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from "react-router-dom";
import '../css/BottomNavigationMenu.css';
class BottomNavigationMenu extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
                <div className="col-lg-12 foot-menu">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 active">
                        <div className="icons"><span className="fa fa-google" aria-hidden="true"></span></div>
                        <label>Place Order</label>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="icons"><span className="fa fa-history" aria-hidden="true"></span> </div>
                        <label>Order History</label>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="icons"><span className="fa fa-user" aria-hidden="true"></span> </div>
                        <label>Customer</label>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="icons"><span className="fa fa-rss" aria-hidden="true"></span> </div>
                        <label>More</label>
                    </div>
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
export default connect(mapStateToProps, actions)(withRouter(BottomNavigationMenu));