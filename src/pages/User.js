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
    const { id, name, profile_pic, focus, project_link} = this.props.currentUser

    return (
        <div>
            <Jumbotron>
              <h2>{id}: Name: {name}</h2>
              <img src={profile_pic} alt="profile picture"/>
              <h4>
                Current Focus: {focus}
              </h4>
              <p>
                <Button >Click here to pair</Button>
              </p> 
              
              <p>
                <Button onClick={this.props.next}>Next Potential Pair</Button>
              </p>
            </Jumbotron>
        </div>
    );
  }
}

export default User;
