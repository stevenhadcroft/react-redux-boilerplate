const uiState = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_STORE_FROM_INPUT':
			return state;

		case 'NAV_TO_PAGE':
			if (!action.ignoreHistory){
				window.history.pushState({pageId: action.pageId}, null, "" +action.pageId);
			}
			let newState = Object.assign({}, state, {pageId: action.pageId});
			return Object.assign({}, state, newState);

        default:
            return state
    }
};

export default uiState

