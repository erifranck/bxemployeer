import { sortBy } from "../../utils/methods";

export const PEOPLE_REQUEST = 'PEOPLE_REQUEST';
export const CREATE_PEOPLE_SUCCESS = 'CREATE_PEOPLE_SUCCESS';
export const CREATE_PEOPLE_FAIL = 'CREATE_PEOPLE_FAIL';
export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const GET_PEOPLE_FAIL = 'GET_PEOPLE_FAIL';

export const DELETE_PEOPLE_SUCCESS = 'DELETE_PEOPLE_SUCCESS';
export const DELETE_PEOPLE_FAIL = 'DELETE_PEOPLE_FAIL';

export const SEARCH_PEOPLE = 'SEARCH_PEOPLE';
export const SORT_PEOPLE_BY = 'SORT_PEOPLE_BY';
export const EDIT_PEOPLE_SUCCESS = 'EDIT_PEOPLE_SUCCESS';
export const EDIT_PEOPLE_FAIL = 'EDIT_PEOPLE_FAIL';

const INITIAL_STATE = {
    isFetch: false,
    data: [],
    error: null,
};

export function peopleReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case PEOPLE_REQUEST:
            return {
                ...state,
                isFetch: true,
            };
        case GET_PEOPLE_SUCCESS:
            return {
                ...state,
                data: action.response.data,
                isFetch: false,
            };
        case GET_PEOPLE_FAIL:
            return {
                ...state,
                error: action.response.error,
                isFetch: false,
            };
        case CREATE_PEOPLE_SUCCESS:
            return {
                ...state,
                isFetch: false,
                data: state.data.concat([action.person])
            };
        case CREATE_PEOPLE_FAIL:
            return {
                ...state,
                isFetch: false,
                error: action.response.error
            };
        case DELETE_PEOPLE_SUCCESS:
            return {
                ...state,
                isFetch: false,
                data: state.data.filter(item => item.id !== action.id)
            };
        case DELETE_PEOPLE_FAIL:
            return {
                ...state,
                isFetch: false,
                error: action.response.error,
            };
        case SEARCH_PEOPLE:
            return {
                ...state,
                search: action.search,
            };
        case SORT_PEOPLE_BY:
            return {
                ...state,
               data: sortBy(action.key, state.data.slice()),
            };
        case EDIT_PEOPLE_SUCCESS:
            return {
                ...state,
                isFetch: false,
                data: state.data.concat([action.person])
            };
        case EDIT_PEOPLE_FAIL:
            return {
                ...state,
                isFetch: false,
                error: action.response.error
            };
        default:
            return state;
    }
}
