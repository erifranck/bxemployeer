import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from "./reducers/rootReducer";

const composehenance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middleware = [];
middleware.push(thunk);
export const store = createStore(rootReducer, composehenance(applyMiddleware(...middleware)));
