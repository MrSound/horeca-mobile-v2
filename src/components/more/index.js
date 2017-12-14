import { connect } from 'react-redux';
import { Container, Row, Col, } from 'reactstrap';
import { Link } from 'react-router-dom'
import React from 'react';

import * as actions from '../../actions';
import BottomNavMenu from '../bottom/BottomNavigationMenu';

// import Confirmation from '../util/Confirmation';
import Divider from '../util/Divider';

import { confirm, } from '../util/Confirm';

class More extends React.Component {


    singOut = () => {
        confirm('Please confirm you would like to Log out.',{title:"Log Out"}).then(() => {
            //console.log('proceed!');
            this.props.signoutUser();
        }, () => {
            //console.log('cancel!');
        });
    }

    mainMenu = (menuName) => {
        return (
            <div>
                <Row>
                    <Col lg="12" style={{
                        color: "gray", backgroundColor: "transparent",
                        textAlign: 'Left', padding: "20px 0px 10px 15px",

                    }}>
                        {menuName}
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" style={{ padding: 0, }}>
                        <Divider style={{ margin: 0, height: 0, width: '100%', borderTopColor: '#EEE', }} />
                    </Col>
                </Row>
            </div>
        );
    }

    subMenu = (menuName, paddingLeft = 0, fontSize, path = null, func = null) => {
        return (
            <div>
                <Row>
                    <Col lg="12" style={{
                        color: "#333", backgroundColor: "#FFF",
                        textAlign: 'Left', padding: "15px 15px 15px 25px",
                        fontSize, fontWeight: 300,
                    }}>{
                            (path !== null
                            && <Link to={`/${path}`} onClick={() => { if (func != null) func() }}>{menuName}</Link>)
                            || menuName
                        }
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" style={{ padding: 0, paddingLeft, backgroundColor: "#FFF", }}>
                        <Divider style={{ margin: 0, height: 0, width: '100%', borderTopColor: '#EEE', }} />
                    </Col>
                </Row>
            </div>
        );
    }

    render() {
        return (
            <Container style={{ backgroundColor: "#FCF9FF", zIndex: 2, height: '100vh', }}>
                {/* <Confirmation modal={this.state.modal} /> */}
                {this.mainMenu("Analytic")}
                {this.subMenu("ยอดขายตามเซลล์", 15, 20)}
                {this.subMenu("ยอดขายตามสินค้า", 15, 20)}
                {this.subMenu("ยอดขายตามลูกค้า", 0, 20)}

                {this.mainMenu("You are logged as")}
                {this.subMenu("Chaithep Srikrisadaporn", 15, 16)}
                {this.subMenu("Log Out", 0, 16, "more", this.singOut)}

                <Row>
                    <Col lg="12">
                        <BottomNavMenu activeMenu={4} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect(null, actions)(More);