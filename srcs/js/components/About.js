/* React */
import React, { Component } from "react";
import { connect } from "react-redux";
/* Icons */
import User from "mdi-react/AccountIcon";
import Age from "mdi-react/CakeVariantIcon";
import Work from "mdi-react/BriefcaseIcon";
import Location from "mdi-react/MapMarkerIcon";

class Info extends Component {

	render() {
		return (
			<div className="item">
				<div className="title">
					{this.props.title}
				</div>
				<div className="value">
					{this.props.value.split("\n").map((item, key) => {
						return <span key={key}>{item}<br/></span>;
					})}
				</div>
			</div>
		);
	}

}

class About extends Component {

	render() {
		let items = Object.keys(this.props.infos).map((value, index) => {
			return <Info key={index} title={this.props.infos[value].title} value={this.props.infos[value].text} />;
		});
		return (
			<div id="about">
				<div className="background"/>
				<div className="card">
					<div className="text list">
						{items}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		infos: state.about
	};
};

export default connect(mapStateToProps)(About);
