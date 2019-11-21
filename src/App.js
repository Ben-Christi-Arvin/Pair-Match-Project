import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
    	return createUser(newUserInfo)
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
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <h1 className="navbar-brand" >PAIR PROJECT MATCHER</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home Page<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="/newuser">New User </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/user">Start Matching</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/users">Current Potential Pairs</a>
                    </li>
                </ul>

                </div>
                </nav>

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
