
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Header = ({
    Wrapper,
    Left,
    Center,
    Right,
    Link,
    IconClose,
}) => {
    const Thing = () => (
        <Wrapper className="row">
            <Left className="col-4 text-left">
                <Link to="/order">
                    <IconClose className="fa fa-times" />
                </Link>
            </Left>
            <Center className="col-4 text-left">Checkout</Center>
            <Right className="col-4 text-right">Clear Cart</Right>
        </Wrapper >
    );
    return Thing;
}

const ThemedHeader = Header({
    Wrapper: styled.div`
        background-color:#4364B2;
        display: flex;
        align-items: center;
        justify-content: center;
        height:50px;
        color:#fff;

        position:fixed;
        width:100%;
        z-index:1;
        top:0;
        margin:0px;
        padding:0px;
    `,
    Left: styled.div`
    `,
    Center: styled.div`
        font-size:18px;
        font-weight:bold;
    `,
    Right: styled.div`
        font-size:14px;
        text-decoration: underline;
        font-weight:100;
        cursor:pointer;
    `,
    Link: styled(Link) `
        color:white;
        &:hover{
             color:#CCC;
        }
    `,
    IconClose: styled.i`
        font-size:30px; 
        cursor: pointer;
    `,
});

const HeaderCart = ({ }) => (
    <ThemedHeader />
);

export default HeaderCart;