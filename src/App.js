import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import Constants from './constants';

class App extends Component {
  render() {
	  let pages = {
		  [Constants.PAGE_HOME]    : require('./pages/Home'),
		  [Constants.PAGE_MAP]     : require('./pages/Map'),
		  [Constants.PAGE_ABOUT]   : require('./pages/About'),
	  };
	  const body = pages[this.props.uiState.pageId];

	  return (
		  <div className="App">
			  <body.default/>
		  </div>
	  );
  }
}

const mapStateToProps = (state) => ({
	uiState: state.uiState
});

App = connect(mapStateToProps, null)(App);

export default App;
