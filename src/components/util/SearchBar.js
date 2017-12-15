import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as actions from '../../actions';

const searchBar = ({
    Wrapper,
    Container,
    Row,
    Col,
    Input,
    Link,
    Icon,
}) => {
    const search = ({ height, children, showIcon }) => (
        <Wrapper height={height}>
            <Container height={height}>
                <Row className="row">
                    <Col className="col-lg-12">
                        <Input className="form-control search-input" placeholder="Search for anything here" type="text" />
                        {!!showIcon && <Link to="/cart">
                            <Icon className="fa fa-shopping-cart fa-lg ml-2 mt-2" aria-hidden="true" />
                        </Link>}
                    </Col>
                </Row>
                {children}
            </Container>
        </Wrapper>
    );
    return search;
}

const Wrapper = styled.div`
    height: ${props => props.height ? 50 + props.height : 50}px;
    z-index:100;
`;

const ThemedSearchBar = searchBar({
    Wrapper,
    Container: Wrapper.extend`        
        width: 100%;
        position: fixed;
        background-color: #fff;
    `,
    Row: styled.div`
        margin: 0;
        background-color:#4364B2;
        display: flex;
        align-items: center;
        justify-content: center;
        height:50px;
        color:#fff;
        /* 
        > input.search-input {
            background-color:#2f467c;
            border:unset;
            color:#fff;
        } */
    `,
    Col: styled.div`
        display: flex;
        text-align:center;
    `,
    Input: styled.input`
        background-color:#2f467c;
        border:unset;
        color:#fff;
    `,
    Link: styled(Link) `
        color:white;
        &:hover{
             color:#CCC;
        }
        /* &:not(:last-child) {
            margin-bottom: 2rem;
        } */
    ` ,
    Icon: styled.i`
        font-size:20px;
    `,
});

class SearchBar extends React.Component {
    static defaultProps = {
        subMenuHeight: 0,
        showCartIcon: false,
    }
    render() {
        return (
            <ThemedSearchBar height={this.props.subMenuHeight} showIcon={this.props.showCartIcon}>
                {this.props.children}
            </ThemedSearchBar>
        );
    }
}
SearchBar.propTypes = {
    subMenuHeight: PropTypes.number.isRequired,
    showCartIcon: PropTypes.bool.isRequired,
};
function mapStateToProps(state) {
    return {
        role: state.auth.role,
    }
}
export default connect(mapStateToProps, actions)(SearchBar);