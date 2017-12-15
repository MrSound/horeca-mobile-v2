import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';

import * as actions from '../../actions';

import HeaderCart from './HeaderCart'
import FooterCart from './FooterCart'

const CartContainer = styled.div`
    height:100vh;
    display:inline-table;
    z-index:2;
    background-color:#e2e2e2;
    position:absolute;
    width:100%;
    padding:0px;
`;
class Cart extends React.Component {
    render() {
        return (
            <CartContainer>
                <HeaderCart />
                <FooterCart />
            </CartContainer>
        );
    }
}
function mapStateToProps(state) {
    return {
        role: state.auth.role,
    }
}
export default connect(mapStateToProps, actions)(Cart);