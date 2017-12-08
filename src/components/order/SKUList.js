import { connect } from 'react-redux';
import React from 'react';

import * as actions from '../../actions';
import SKUListItem from './SKUListItem';

class SKUList extends React.Component {
    render() {
        return (
            <div>
                <SKUListItem />
                <SKUListItem />
                <SKUListItem />
                <SKUListItem />
                <SKUListItem />
                <SKUListItem />
                <SKUListItem />
                <SKUListItem />
                <SKUListItem />
                <SKUListItem />
                <SKUListItem />
                <SKUListItem />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        role: state.auth.role,
    }
}
export default connect(mapStateToProps, actions)(SKUList);