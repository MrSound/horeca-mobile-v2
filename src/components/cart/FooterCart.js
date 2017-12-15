import React from 'react';

import styled from 'styled-components';

const Footer = ({
    Row,
    Col,
    Span_1,
    Span_2,
}) => {
    const foot = () => (
        <Row className="row">
            <Col className="col-12">
                <Span_1>Place order to all suppliers</Span_1>
                &nbsp;&nbsp;&nbsp;
                <Span_2>$250.40</Span_2>
            </Col>
        </Row>
    );
    return foot;
}

const ThemedFooter = Footer({
    Row :styled.div`
        background-color:#65f18a;

        padding:0px;
        /* background-color:#fff; */
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        text-align:center;
    `,
    Col :styled.div`
        font-size:18px;padding:20px;
    `,
    Span_1 :styled.span`
        color: #fff !important;
        text-decoration: none;
        text-shadow: 1px 0 0 #65f18a, -1px 0 0 #65f18a;
        /*76A6CA*/
        background-image: linear-gradient(to right, currentColor 0%, currentColor 100%);
        background-repeat: repeat-x;
        background-position: 0 91%;
        -webkit-background-size: 100% 4px;
        background-size: 100% 1px;
        font-weight: 100;
        cursor: pointer;
        font-weight:bold;
        /* &:hover{
            color: #fff !important;
            text-decoration: none;
            text-shadow: 1px 0 0 #65f18a, -1px 0 0 #65f18a;
            background-image: linear-gradient(to right, currentColor 0%, currentColor 100%);
            background-repeat: repeat-x;
            background-position: 0 91%;
            -webkit-background-size: 100% 4px;
            background-size: 100% 1px;
            font-weight: 100;
            cursor: pointer;
            font-weight:bold;
        } */
    `,
    Span_2 :styled.span`
        padding:10px 20px;
        background-color:#51c16f;
        color:#fff;font-weight:bold;
        border-radius:10px;
    `,
});

const FooterCart = ({ }) => (
    <ThemedFooter />
);

export default FooterCart;