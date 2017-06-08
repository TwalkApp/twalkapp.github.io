/* React */
import React, { Component } from "react";
import { connect } from "react-redux";
/* Icons */
import Github from "mdi-react/GithubIcon";

class Social extends Component {

	render() {
		return (
			<div id="social">
				<a href="https://github.com/TwalkApp" target="_blank">
					<p>
						Check out Twalk on Github
					</p>
				</a>
				<a href="https://github.com/TwalkApp" target="_blank">
					<Github/>
				</a>
			</div>
		);
	}
}

export default Social;
