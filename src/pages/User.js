import React, { Component } from 'react';
import {
  Jumbotron,
  Button
} from 'react-bootstrap'

class User extends Component {
  render() {
    const { id, name, profile_pic, focus} = this.props.currentUser

    return (
        <div>
            <Jumbotron>
              <h2>{id}: Name: {name}</h2>
              <img src={profile_pic} alt="profile"/>
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
