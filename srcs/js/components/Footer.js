/* React */
import React, { Component } from "react";
/* Icons */
import Heart from "mdi-react/HeartIcon";

class Footer extends Component {

	render() {
		return (
			<div id="footer">
				Made with <Heart/> by <a href="https://hug33k.github.io" target="_blank">Hugo SCHOCH</a> - 2017
			</div>
		);
	}
}

export default Footer;
