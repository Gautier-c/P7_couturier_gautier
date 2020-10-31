import React, { Component } from "react";
import Login from "./components/Homepage/Login";
import Signup from "./components/Homepage/Signup";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Route} from "react-router-dom";

import "./App.css";

export class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/" component={Login} />
          <Route exact path="/myprofile" component={Profile} />
				</div>
			</Router>
		);
	}
}

export default App;
