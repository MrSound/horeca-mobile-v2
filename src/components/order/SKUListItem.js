import { connect } from 'react-redux';
import { Container, Row, Col, } from 'reactstrap';
import React from 'react';

import * as actions from '../../actions';

import '../../css/SKUListItem.css';

class SKUListItem extends React.Component {
    render() {
        return (
            <Container style={{ padding: 0, }}>
                <Row className="item-list" style={{ margin: 0, }}>
                    <Col lg="3" md="3" sm="3" xs="3" className="img-sku">
                        <img src="./images/sku_003.jpg" className="img-circle" alt="Cinque Terre" width="80px" height="60px" />
                    </Col>
                    <Col lg="9" md="9" sm="9" xs="9">
                        <div className="label-item">Name 1</div>
                        {/* <div className="label-item item-1">SKU #s_1</div> */}
                        <div className="label-item"><label className="item-2">$1.20</label> <label className="item-1">/Kg.</label></div>
                        <button type="button" className="btn btn-primary btn-md btn-add-cart under-line"> Add to Cart</button>
                        <button type="button" className="btn btn-success btn-md under-line"> View Detail</button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        role: state.auth.role,
    }
}
export default connect(mapStateToProps, actions)(SKUListItem);