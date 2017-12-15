import { Link } from 'react-router-dom';
import { Row, Col, } from 'reactstrap';
import React from 'react';

import Divider from '../util/Divider';

const MenuItem = ({ topic, name, end, fontSize, path, func }) => {
    if (topic === true) {
        return (
            <div>
                <Row>
                    <Col lg="12" style={{
                        color: "gray", backgroundColor: "transparent",
                        textAlign: 'Left', padding: "20px 0px 10px 15px",
                    }}>
                        {name}
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" style={{ padding: 0, }}>
                        <Divider style={{ margin: 0, height: 0, width: '100%', borderTopColor: '#EEE', }} />
                    </Col>
                </Row>
            </div>
        );
    } else {
        let paddingLeft = 0;
        if (end !== true) paddingLeft = 15;
        return (
            <div>
                <Row>
                    <Col lg="12" style={{
                        color: "#333", backgroundColor: "#FFF",
                        textAlign: 'Left', padding: "15px 15px 15px 25px",
                        fontSize, fontWeight: 300,
                    }}>{
                            (path !== null
                                && <Link to={`/${path}`} onClick={() => { if (func != null) func() }}>{name}</Link>)
                            || name
                        }
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" style={{ padding: 0, paddingLeft, backgroundColor: "#FFF", }}>
                        <Divider style={{ margin: 0, height: 0, width: '100%', borderTopColor: '#EEE', }} />
                    </Col>
                </Row>
            </div>
        );
    }
};

export default MenuItem;