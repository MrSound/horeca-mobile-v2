import React from 'react';
import '../../css/signin.css';

class Signin extends React.Component {
    render() {
        return (
            <div className="padding">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="font-horeca font-color-white font-head"><label>Sign In</label></h3>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="font-horeca font-color-white font-label-signin">
                                Email Address
                            </label>
                            <input
                                className="form-control font-horeca input-lg font-color-white input-signin"
                                placeholder="chef@horeca.com" type="text" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="font-horeca font-color-white font-label-signin">
                                Password
                            </label>
                            <input
                                className="form-control font-horeca input-lg font-color-white input-signin"
                                type="text" />
                        </div>
                    </div>
                    <div className="col-lg-12 text-center">
                        <div className="form-group">
                            <button type="button" className="btn btn-lg font-kanit btn-login">
                                <a className="smart-underline font-horeca"><b>Sign in to my account</b></a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;