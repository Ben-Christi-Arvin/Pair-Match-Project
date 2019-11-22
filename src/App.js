import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { getUsers, createUser } from './api'

import User from './pages/User'
import Users from './pages/Users'
import NewUser from './pages/NewUser'
import Home from './pages/Home'

class App extends Component {
    constructor(props){
        super(props)
            this.state = {
            currentUser: {},
            users: []
            }
    }

    componentDidMount() {
      getUsers()
    	.then(APIusers => {
    	  this.setState({
    		users: APIusers
    	  })
          this.getRandomUser()
      })
    }

    handleNewUser = (newUserInfo) => {
    	createUser(newUserInfo)
        .then(successUser => {
            console.log("SUCCESS! New user: ", successUser);
        })
    }

    getRandomUser = () => {
      const { users } =this.state

      const usersId = this.state.users.map(userObj => {
          return userObj.id
      })
      const randomNum = Math.floor(Math.random() * usersId.length)

      const randomUser = users[randomNum]

      this.setState({currentUser: randomUser})
    }

  render() {
    return (
		<Router>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand >PAIR PROJECT MATCHER</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" >
                      <Nav.Link ><Link style={{color: "white"}} to="/" >Home Page</Link></Nav.Link>
                      <Nav.Link><Link style={{color: "white"}} to="/newuser">Create a new user</Link></Nav.Link>
                      <Nav.Link> <Link style={{color: "white"}} to="/user">Start Matching</Link></Nav.Link>
                      <Nav.Link><Link style={{color: "white"}} to="/users">Current Potential Projects</Link></Nav.Link>
                    </Nav>
                  
                  </Navbar.Collapse>
                </Navbar>

    			<Switch>
    				<Route exact path="/" component={Home} />
            <Route exact path="/newuser" render={(props) => <NewUser createUser={this.handleNewUser}/> } />
            <Route exact path="/user" render={(props) => <User currentUser={this.state.currentUser} next={this.getRandomUser}/> } />
            <Route exact path="/users" render={(props) => <Users users={this.state.users}/> } />
    			</Switch>
            </div>
		</Router>
    );
  }
}

export default App;

//  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//                 <h1 className="navbar-brand" >PAIR PROJECT MATCHER</h1>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarColor01">
//                 <ul className="navbar-nav mr-auto">
//                     <li className="nav-item active">
//                         <a className="nav-link" href="/">Home Page<span className="sr-only">(current)</span></a>
//                     </li>
//                     <li className="nav-item ">
//                         <a className="nav-link" href="/newuser">New User </a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="/user">Start Matching</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="/users">Current Potential Pairs</a>
//                     </li>
//                 </ul>

//                 </div>
//                 </nav>

  // <nav>
  //     <ul>
  //         <li>
  //             <Link to="/user">User</Link>
  //         </li>
  //         <li>
  //             <Link to="/newuser">NewUser</Link>
  //         </li>
  //     </ul>
  // </nav>
