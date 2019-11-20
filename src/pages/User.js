import React, { Component } from 'react';
import {
  Form,
  Jumbotron,
  Button,
  ListGroup,
  Col,
  Container,
  Row
} from 'react-bootstrap'

class User extends Component {
  render() {
    const { id, name, profile_pic, focus} = this.props.currentUser

    return (
        <div>
            <Jumbotron>
              <h2>{id}: Name: {name}</h2>
              <img src={profile_pic} alt="profile picture"/>
              <h3>
                Current Focus: <h4>{focus}</h4>
              </h3>
              <p>
                <Button onClick={this.props.next}>Next Potential Pair</Button>
              </p>
            </Jumbotron>
        </div>
    );
  }
}

export default User;
