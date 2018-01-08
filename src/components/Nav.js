import React, {Component} from 'react';
import {connect} from 'react-redux'
import Constants from '../constants';
import {navToPage} from '../actions/index';
import Button from '../componentsui/Button';

import '../css/components/Nav.css';

class Nav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="page align-c">
				<Button label="Home" onDown={() => this.props.onNavClicked(Constants.PAGE_HOME)}/>
				<Button label="Map" onDown={() => this.props.onNavClicked(Constants.PAGE_MAP)}/>
				<Button label="About" onDown={() => this.props.onNavClicked(Constants.PAGE_ABOUT)}/>
			</nav>
		)
	}
}

const mapDispatchToProps = () => {
	return {
		onNavClicked: function (pageId) {
			this.dispatch(navToPage(pageId));
		},
	}
};

Nav = connect(mapDispatchToProps)(Nav);

export default Nav;

