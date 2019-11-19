import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Users from './pages/Users'
import NewUser from './pages/Users'

class App extends Component {
  render() {
    return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/users" component={Users} />
					<Route exact path="/" component={NewUser} />
				</Switch>
			</Router>
		</div>
    );
  }
}

export default App;
