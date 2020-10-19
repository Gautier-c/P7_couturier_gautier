import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
return(
    <header>
        <h1>Groupomania</h1>
        <ul>
			<li>
				<NavLink to="/Login">
					<p>Se connecter</p>
				</NavLink>
			</li>
			<li>
				<NavLink to="/Signup">
					<p>S'inscrire</p>
				</NavLink>
			</li>
		</ul>
    </header>
)
}
export default Header;