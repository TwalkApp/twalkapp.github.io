/* React */
import React, { Component } from "react";

class Banner extends Component {

	render() {
		let logo = this.props.logo ? <div className="logo"/> : null;
		return (
			<div className={"banner " + this.props.img}>
				<div className="background"/>
				{logo}
			</div>
		);
	}
}

export default Banner;
