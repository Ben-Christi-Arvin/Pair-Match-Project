import React from 'react'
import {
  Form,
  Jumbotron,
  Button,
  ListGroup,
} from 'react-bootstrap'

class NewUser extends React.Component {
    render() {
        return(
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                NewUser
                </p>
                <p>
                <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        )
    }
}

export default NewUser
