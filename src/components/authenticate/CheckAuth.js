import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import React, { Component } from 'react';

import * as actions from '../../actions';

export default function (ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            this.props.checkAuth(this.props.history.push);
            if (!this.props.authenticated) {
                this.props.history.push("/signin");
            } else {
            }
        }
        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.history.push("/signin");
            } else {
            }
        }
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }
    return connect(
        state => ({ authenticated: state.auth.authenticated })
        , actions)(withRouter(Authentication));
}