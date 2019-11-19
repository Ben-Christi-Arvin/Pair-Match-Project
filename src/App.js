import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import User from './pages/User'
import NewUser from './pages/NewUser'

class App extends Component {
    constructor(props){
    super(props)
    this.state = {
      currentUser: {},
      users: [
        {
          id: 1,
          name: 'Patsy',
          profilep_pic: "http://westlandchildrensacademy.com/wp-content/uploads/generic-female-profile-picture-8.jpg",
          focus: "Python Driven Web Scraper"
        },
        {
          id: 2,
          name: 'Paul',
          profilep_pic: "https://publicdomainvectors.org/photos/generic-avatar.png",
          focus: "Python Scripting for Stock Automation"
      },
      {
        id: 3,
        name: 'Paul',
        profilep_pic: "https://publicdomainvectors.org/photos/generic-avatar.png",
        focus: "Python Scripting for Stock Automation"
    },
    {
      id: 4,
      name: 'Paul',
      profilep_pic: "https://publicdomainvectors.org/photos/generic-avatar.png",
      focus: "Python Scripting for Stock Automation"
    }
      ]
    }
  }

  componentDidMount = () => {
      this.getRandomUser()
  }

  getRandomUser = () => {
      const { users, currentUser } =this.state

      const usersId = this.state.users.map(userObj => {
          return userObj.id
      })
      const randomNum = Math.floor(Math.random() * usersId.length)

      const randomUser = users[randomNum]

      this.setState({currentUser: randomUser})
      // console.log(currentUser)
  }

  render() {
    return (
		<Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                        <li>
                            <Link to="/newuser">NewUser</Link>
                        </li>
                    </ul>
                </nav>
                <h1 onClick={this.getRandomUser}> Test Random</h1>
    			<Switch>
                    <Route exact path="/user" render={(props) => <User user={this.state.currentUser}/> } />
    				<Route exact path="/newuser" component={NewUser} />
    			</Switch>
            </div>
		</Router>
    );
  }
}

export default App;
