import React, { Component } from 'react';
import {
  Form,
  Jumbotron,
  Button,
  ListGroup,
  Col,
  Container,
  Row,
  Card,
  CardGroup
} from 'react-bootstrap'

class Users extends Component {
  render() {
    const { id, name, profile_pic, focus} = this.props.users

    return (
        <div>
            <h1>Potential Pairs</h1>
            {this.props.users.map((userObj, index) => {
                return(
                    <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={userObj.profile_pic} style={{width:"100px"}}/>
                        <Card.Body>
                        <Card.Title>{userObj.name}</Card.Title>
                        <Card.Text>{userObj.focus}</Card.Text>
                        </Card.Body>
                       
                    </Card>
                </CardGroup>
            )})}
        </div>
    );
  }
}

export default Users;

// <div>
// <Jumbotron>
//   <h2>{id}: Name: {name}</h2>
//   <img src={profile_pic}/>
//   <p>
//     {focus}
//   </p>
//   <p>
//     <Button onClick={this.props.next}>Next</Button>
//   </p>
// </Jumbotron>
// </div>

// {this.state.recipes.map((recipe, index)=>{
//     return(
//       <Card key={index}>
//         <Card.Img variant="top" src={recipe.image_url} />
//         <Card.Body>
//           <Card.Title>{recipe.title}</Card.Title>
//           <a
//             href={recipe.source_url}
//             className='btn btn-outline-primary'
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {recipe.publisher}
//           </a>
//         </Card.Body>
//       </Card>
//     )
//   })}
// </div>
