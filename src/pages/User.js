import React, { Component } from 'react';
import {
  Col, Container, Row
} from 'react-bootstrap'

class User extends Component {
  render() {
    return (
      <Container>
          <Row>
            <Col>
            <div>Im a component for User</div>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default User;
