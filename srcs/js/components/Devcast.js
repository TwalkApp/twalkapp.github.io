/* React */
import React, { Component } from "react";
import { connect } from "react-redux";
/* Icons */
import Soundcloud from "mdi-react/SoundcloudIcon";

class Devcast extends Component {

	render() {
		return (
			<div id="devcast">
				<a href="https://soundcloud.com/hug33k" target="_blank">
					<p>
						Listen to my Devcast about Twalk developement
					</p>
				</a>
				<a href="https://soundcloud.com/hug33k" target="_blank">
					<Soundcloud/>
				</a>
			</div>
		);
	}
}

export default Devcast;
