import { connect } from 'react-redux';
import { Container, Row, Col, } from 'reactstrap';
import React from 'react';
import classNames from 'classnames';

import * as actions from '../../actions';
import Divider from '../util/Divider';

import '../../css/SubMenu.css';

class SubMenu extends React.Component {
    state = {
        btnActive: 1,
    };
    render() {
        let btnAllSKU = classNames({ 'icon-list-active': (this.state.btnActive === 1) ? true : false, });
        let btnFavSKU = classNames({ 'icon-favorite-active': (this.state.btnActive === 2) ? true : false, });
        /*FCFCFC */
        return (
            <div>
                <Container style={{ padding: "10px 0px 0px 20px", backgroundColor: "#FCF9FF", zIndex: 2, }}>
                    <Row>
                        <Col lg="3" style={{ textAlign: 'center', padding: 0, }}>
                            <div onClick={() => { this.setState({ btnActive: 1 }); }}>
                                <div className="icons">
                                    <button type="button" className={`btn btn-circle btn-xl icon-list ${btnAllSKU}`}>
                                        <i className="fa fa-list" />
                                    </button>
                                </div>
                                <label style={{ color: 'gray', fontSize: 12, }}>All Product</label>
                            </div>
                        </Col>
                        <Col lg="3" style={{ textAlign: 'center', padding: 0, marginLeft: -10, }}>
                            <div onClick={() => { this.setState({ btnActive: 2 }); }}>
                                <div className="icons">
                                    <button type="button" className={`btn btn-circle btn-xl icon-favorite ${btnFavSKU}`}>
                                        <i className="fa fa-heart" />
                                    </button>
                                </div>
                                <label style={{ color: 'gray', fontSize: 12, }}>Favorites</label>
                            </div>
                        </Col>
                        <Col lg="3" style={{ textAlign: 'center', padding: 0, }} />
                        <Col lg="3" style={{ textAlign: 'center', padding: 0, }} />
                    </Row>
                </Container>
                <Divider style={{ margin: 0, }} />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        role: state.auth.role,
    }
}
export default connect(mapStateToProps, actions)(SubMenu);