import React, { Component } from 'react';
import Signup from './components/signup/Signup';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Wall from './components/Wall/Wall';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

export class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">

					{this.props.location.pathname === "/wall/" ? "" : <Header /> }
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/Wall" component={Wall} />

				</div>
			</Router>
		);
	}
}

export default withRouter(App);