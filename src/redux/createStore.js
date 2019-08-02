import {applyMiddleware, createStore, compose} from 'redux';
import {rootReducer} from "./reducers/rootReducer";

const composehenance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composehenance());
