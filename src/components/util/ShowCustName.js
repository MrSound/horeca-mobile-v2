import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import * as actions from '../../actions';

class ShowCustName extends React.Component {
    render() {
        return (
            <div align="center">
                <div
                    style={{
                        marginTop: 2,
                        fontSize: '20px', color: 'white',
                        textAlign: 'center',
                        backgroundColor: '#666',
                        borderRadius: '20px',
                        width: '99%',
                    }}>
                    บริษัทศิริวัฒนา อินเตอร์ปริ้น จำกัด
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
export default connect(mapStateToProps, actions)(ShowCustName);