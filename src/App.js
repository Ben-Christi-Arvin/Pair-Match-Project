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
            profile_pic: "http://westlandchildrensacademy.com/wp-content/uploads/generic-female-profile-picture-8.jpg",
            focus: "Python Driven Web Scraper"
        },
        {
            id: 2,
            name: 'Paul',
            profile_pic: "https://publicdomainvectors.org/photos/generic-avatar.png",
            focus: "Python Scripting for Stock Automation"
        },
        {
            id: 3,
            name: 'Peter',
            profile_pic: "https://publicdomainvectors.org/photos/generic-avatar.png",
            focus: "Ruby on Rails"
        },
        {
            id: 4,
            name: 'Pen',
            profile_pic: "http://westlandchildrensacademy.com/wp-content/uploads/generic-female-profile-picture-8.jpg",
            focus: "React and Javascript"
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
    			<Switch>
                    <Route exact path="/user" render={(props) => <User currentUser={this.state.currentUser} next={this.getRandomUser}/> } />
    				<Route exact path="/newuser" component={NewUser} />
    			</Switch>
            </div>
		</Router>
    );
  }
}

export default App;
