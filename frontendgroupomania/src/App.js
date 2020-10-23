import React, { Component } from 'react';
import Signup from './components/signup/Signup';
import Login from './components/Login/Login';
import Wall from './components/Wall/Wall';
import Publish from './components/Publish/Publish';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

export class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/Wall" component={Wall} />
					<Route exact path="/Publish" component={Publish} />
				</div>
			</Router>
		);
	}
}

export default withRouter(App);