import {combineReducers} from 'redux';
import {peopleReducer} from "./people";
import {kinshipsReducer} from "./kinships";

export const rootReducer = combineReducers({
    people: peopleReducer,
    kinship: kinshipsReducer,
});
