import React from 'react';
import { Button, Container, Row, Col, FormGroup, Alert, } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from "react-router-dom";

import '../../css/SignIn.css';

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
        //this.props.authError('Username is required');
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
        //this.props.authError('Must be 15 characters or less');
    }
    if (!values.password) {
        errors.password = 'Required'
        //this.props.authError('Password is required');
    }
    return errors
}

const warn = values => {
    const warnings = {}
    // if (values.age < 19) {
    //     warnings.age = 'Hmm, you seem a bit young...'
    // }
    return warnings
}

class Signin extends React.Component {
    handleFormSubmit(formProps) {
        this.props.signinUser(formProps, this.props.history.push);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <Alert color="warning" className="font-horeca show_notify">
                    <i className="fa fa-exclamation-triangle icon_notify"></i>
                    &nbsp;Invalid Username or Password.
                </Alert>
            );
        }
    }

    renderField = ({ input, placeholder, type, label, meta: { touched, error, warning } }) => (
        <Row>
            <Col lg="12">
                <FormGroup>
                    <label className="font-horeca font-color-white font-label-signin">
                        {label}
                    </label>
                    <input
                        {...input}
                        className="form-control font-horeca input-lg font-color-white input-signin"
                        placeholder={placeholder}
                        type={type} />
                    {touched && (
                        (error &&
                            <Alert color="warning" className="font-horeca show_notify">
                                <i className="fa fa-exclamation-triangle icon_notify"></i>
                                &nbsp;{error}
                            </Alert>
                        )
                        ||
                        (warning &&
                            <Alert color="warning" className="font-horeca show_notify">
                                <i className="fa fa-exclamation-triangle icon_notify"></i>
                                &nbsp;{warning}
                            </Alert>
                        )
                    )}
                </FormGroup>
            </Col>
        </Row>
    )

    render() {        
        document.body.style.backgroundColor = '#35549c';
        const { handleSubmit, pristine, /*reset,*/ submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Container className="signin-padding">
                    <Row>
                        <Col lg="12">
                            <h3 className="font-horeca font-color-white font-head"><label>Sign In</label></h3>
                        </Col>
                    </Row>
                    <Field
                        name="username"
                        component={this.renderField}
                        placeholder="chef@horeca.com"
                        label="Username"
                        type="text"
                    />
                    <Field
                        name="password"
                        component={this.renderField}
                        placeholder=""
                        label="Password"
                        type="password"
                    />
                    <Row>
                        <Col lg="12" className="text-center">
                            <FormGroup>
                                <Button color="info" className="btn-login"
                                    disabled={(pristine || submitting)}>
                                    {/* smart-underline */}
                                    <a className="font-color-white font-horeca"><b className="font-color-white">Sign in to my account</b></a>
                                </Button>
                            </FormGroup>
                            {this.renderAlert()}
                        </Col>
                    </Row>
                </Container >
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        role: state.auth.role,
        errorMessage: state.auth.error,
        initialValues: {
            // username: "admin",
            // password: "1234",
            // username: "b@b.com",
            // password: "secret",
        },
    }
}

export default connect(mapStateToProps, actions)(reduxForm({
    form: 'signinForm',
    validate, // <--- validation function given to redux-form
    warn, // <--- warning function given to redux-form
})(withRouter(Signin)));
