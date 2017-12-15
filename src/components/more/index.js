import { connect } from 'react-redux';
import { Container, Row, Col, } from 'reactstrap';
import React from 'react';

import { confirm, } from '../util/Confirm';
import * as actions from '../../actions';
import BottomNavMenu from '../bottom/BottomNavigationMenu';
import MenuItem from './MenuItem';

class More extends React.Component {
    render() {
        const menu = [
            {
                topicName: "Analytic",
                subMenu: [
                    { name: "ยอดขายตามเซลล์", end: false, fontSize: 20, path: null, func: null },
                    { name: "ยอดขายตามสินค้า", end: false, fontSize: 20, path: null, func: null },
                    { name: "ยอดขายตามลูกค้า", end: true, fontSize: 20, path: null, func: null },
                ]
            },
            {
                topicName: "You are logged as",
                subMenu: [
                    { name: "Chaithep Srikrisadaporn", end: false, fontSize: 16, path: null, func: null },
                    {
                        name: "Log Out", end: true, fontSize: 16, path: "more",
                        func: () => {
                            confirm('Please confirm you would like to Log out.', { title: "Log Out" }).then(() => {
                                //console.log('proceed!');
                                this.props.signoutUser();
                            }, () => {
                                //console.log('cancel!');
                            });
                        }
                    },
                ]
            }
        ];
        return (
            <Container style={{ backgroundColor: "#FCF9FF", zIndex: 2, height: '100vh', }}>
                {menu.map((main, mainIndex) => {
                    return [
                        <MenuItem topic={true} name={main.topicName} key={`topic-${mainIndex}`} />,
                        main.subMenu.map((sub, subIndex) => {
                            return <MenuItem topic={false} {...sub} key={`menu-${mainIndex + subIndex}`} />
                        })
                    ]
                })}
                <Row>
                    <Col lg="12">
                        <BottomNavMenu activeMenu={4} />
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default connect(null, actions)(More);