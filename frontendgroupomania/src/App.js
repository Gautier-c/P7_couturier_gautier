import React, { Component } from 'react';
import Signup from './components/signup/Signup';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route } from "react-router-dom";

export class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">


					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />

				</div>
			</Router>
		);
	}
}

export default App;