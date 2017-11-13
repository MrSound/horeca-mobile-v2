import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import '../../css/signin.css';

class Signin extends React.Component {
    render() {
        return (
            <Container className="signin-padding">
                <Row>
                    <Col lg="12">
                        <h3 className="font-horeca font-color-white font-head"><label>Sign In</label></h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <div className="form-group">
                            <label className="font-horeca font-color-white font-label-signin">
                                Email Address
                            </label>
                            <input
                                className="form-control font-horeca input-lg font-color-white input-signin"
                                placeholder="chef@horeca.com" type="text" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <div className="form-group">
                            <label className="font-horeca font-color-white font-label-signin">
                                Password
                            </label>
                            <input
                                className="form-control font-horeca input-lg font-color-white input-signin"
                                type="text" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" className="text-center">
                        <div className="form-group">
                            <Button color="info" className="btn-login">
                                <a className="smart-underline font-color-white font-horeca"><b className="font-color-white">Sign in to my account</b></a>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Signin;