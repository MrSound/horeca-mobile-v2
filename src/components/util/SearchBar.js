import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as actions from '../../actions';

import '../../css/SearchBar.css';

const Wrapper = styled.div`
        height: ${props => props.height ? 50 + props.height : 50}px;
        z-index:100;
    `;
const Container = Wrapper.extend`        
        width: 100%;
        position: fixed;
        background-color: #fff;
        /* &:not(:last-child) {
            margin-bottom: 2rem;
        }
        &:hover {
            background-color:#ff0000; 
        }  */
    `;
class SearchBar extends React.Component {
    static defaultProps = {
        subMenuHeight: 0,
    }
    render() {
        return (
            <Wrapper height={this.props.subMenuHeight}>
                <Container height={this.props.subMenuHeight}>
                    <div className="col-lg-12 search-bar">
                        <div className="col-lg-12" style={{ display: 'flex', }}>
                            <input className="form-control search-input" placeholder="Search for anything here" type="text" />
                            <i className="fa fa-shopping-cart fa-lg ml-2 mt-2" aria-hidden="true"></i>
                        </div>
                    </div>
                    {this.props.children}
                </Container>
            </Wrapper>
        );
    }
}
SearchBar.propTypes = {
    subMenuHeight: PropTypes.number.isRequired,
};
function mapStateToProps(state) {
    return {
        role: state.auth.role,
    }
}
export default connect(mapStateToProps, actions)(SearchBar);