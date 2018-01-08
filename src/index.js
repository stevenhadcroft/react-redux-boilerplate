import './css/reset.css';
import './css/layout.css';
import './css/style.css';
import './css/fonts.css';

import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux' // , applyMiddleware
import reducers from './reducers';

import Constants from './constants';

import App from './App';
import browserHistory from './utils/browserHistory';

function getDefaultState() {
	return {
		uiState:{
			pageId:Constants.PAGE_HOME
		}
	};
}

let store = createStore(reducers, getDefaultState()); //, applyMiddleware(dataService)
browserHistory.init(store);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);



