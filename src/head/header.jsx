import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
            <container>
                <row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
                </row>
            </container>
        )
    }
}
