import { connect } from 'react-redux';
import { Container, Row, Col, } from 'reactstrap';
import { withRouter } from "react-router-dom";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import * as actions from '../../actions';

import '../../css/BottomNavigationMenu.css';

class BottomNavigationMenu extends React.Component {
    static defaultProps = {
        activeMenu: 1,
    }
    state = {
        subMenuActive: 1,
    };
    componentWillMount() {
        this.menuActive(this.props.activeMenu);
    }
    menuActive = (menuId, path) => {
        this.setState({ subMenuActive: menuId, });
        this.props.history.push(path);
    }
    render() {
        let subMenu_1 = classNames({ 'active': (this.state.subMenuActive === 1) ? true : false, });
        let subMenu_2 = classNames({ 'active': (this.state.subMenuActive === 2) ? true : false, });
        let subMenu_3 = classNames({ 'active': (this.state.subMenuActive === 3) ? true : false, });
        let subMenu_4 = classNames({ 'active': (this.state.subMenuActive === 4) ? true : false, });
        return (
            <Container style={{ paddingTop: 61, }}>
                <Row>
                    <Col lg="12">
                        {this.props.children}
                    </Col>
                </Row>
                <Row className="foot-menu">
                    <Col lg="3"
                        className={subMenu_1}
                        onClick={() => { this.menuActive(1, "order"); }}
                    >
                        <div className="icons"><i className="fa fa-google" aria-hidden="true"></i></div>
                        <label>Order</label>
                    </Col>
                    <Col lg="3"
                        className={subMenu_2}
                        onClick={() => { this.menuActive(2, ""); }}
                    >
                        <div className="icons"><i className="fa fa-history" aria-hidden="true"></i></div>
                        <label>Order History</label>
                    </Col>
                    <Col lg="3"
                        className={subMenu_3}
                        onClick={() => { this.menuActive(3, "customer"); }}
                    >
                        <div className="icons"><i className="fa fa-user" aria-hidden="true"></i></div>
                        <label>Customer</label>
                    </Col>
                    <Col lg="3"
                        className={subMenu_4}
                        onClick={() => { this.menuActive(4, ""); }}
                    >
                        <div className="icons"><i className="fa fa-rss" aria-hidden="true"></i></div>
                        <label>More</label>
                    </Col>
                </Row>
            </Container >
        );
    }
}
BottomNavigationMenu.propTypes = {
    activeMenu: PropTypes.number.isRequired,
};
function mapStateToProps(state) {
    return {
        role: state.auth.role,
    }
}
export default connect(mapStateToProps, actions)(withRouter(BottomNavigationMenu));