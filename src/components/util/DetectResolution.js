import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import React, { Component } from 'react';

import * as actions from '../../actions';

export default function (ComposedComponent) {
    class DetchResolution extends Component {
        componentWillMount() {
            this.updateDimensions();
        }
        componentDidMount = () => {
            window.addEventListener("resize", this.updateDimensions);
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.updateDimensions);
        }
        updateDimensions = () => {
            var w = window,
                d = document,
                documentElement = d.documentElement,
                body = d.getElementsByTagName('body')[0],
                width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
                height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
            this.props.setScreenWidthHeight(width, height);
        }
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }
    return connect(
        state => ({ screen_resolution: state.common.screen_resolution })
        , actions
    )(withRouter(DetchResolution));
}