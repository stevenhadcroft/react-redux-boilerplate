import {navToPage} from '../actions/index';

// handle browser navigation
const browserHistory = {
    init: function (store) {
        window.onpopstate = function (event) {
            if (event.state && event.state.pageId) {
                store.dispatch(navToPage(event.state.pageId, null, true))
            }
        };
        window.onpushstate = function (event) {
            if (event.state) {
                store.dispatch(navToPage(event.state.pageId, null, true))
            }
        };
    },
}
export default browserHistory
