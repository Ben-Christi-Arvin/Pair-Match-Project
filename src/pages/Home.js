import React from 'react'
import {
    Form,
    Jumbotron,
    Button,
    ListGroup,
    Col,
    Container,
    Row
  } from 'react-bootstrap'

class Home extends React.Component {
    render() {
        return(
            <Jumbotron fluid>
            <Container>
              <h1>Welcome to the Pair Project Matcher!</h1>
              <p style={{"font-weight": "bold"}}>
                The intention of this is app is to match developers with other developers in order for them to pair up for projects based on interests
              </p>
            </Container>
          </Jumbotron>
        );
    }
}

export default Home