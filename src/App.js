import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

import User from './pages/User'
import Users from './pages/Users'
import NewUser from './pages/NewUser'
import Home from './pages/Home'

class App extends Component {
    constructor(props){
    super(props)
    this.state = {
      currentUser: {},
      users: [
        {
            id: 1,
            name: 'Patsy',
            profile_pic: "https://stroseschool.stroselions.net/wp-content/uploads/2018/04/profile-blank-reva.png",
            project_link: "https://github.com/explore",
            focus: "All things Elixir"
        },
        {
            id: 2,
            name: 'Paul',
            profile_pic: "https://stroseschool.stroselions.net/wp-content/uploads/2018/04/profile-blank-reva.png",
            project_link: "https://github.com/explore",
            focus: "Python Scripting for Stock Automation"
        },
        {
            id: 3,
            name: 'Peter',
            profile_pic: "https://stroseschool.stroselions.net/wp-content/uploads/2018/04/profile-blank-reva.png",
            project_link: "https://github.com/explore",
            focus: "Ruby on Rails"
        },
        {
            id: 4,
            name: 'Pen',
            profile_pic: "https://stroseschool.stroselions.net/wp-content/uploads/2018/04/profile-blank-reva.png",
            project_link: "https://github.com/explore",
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
  }

  render() {
    return (
		<Router>
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">PAIR PROJECT MATCHER</a>
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
    				<Route exact path="/newuser" component={NewUser} />
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
