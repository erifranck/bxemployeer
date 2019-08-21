import {sortBy} from "../../utils/methods";

export const KINSHIPS_REQUEST = 'KINSHIPS_REQUEST';
export const GET_KINSHIPS_SUCCESS = 'GET_KINSHIPS_SUCCESS';
export const GET_KINSHIPS_FAIL = 'GET_KINSHIPS_FAIL';

export const GET_KINSHIPS_BY_ID_SUCCESS = 'GET_KINSHIPS_BY_ID_SUCCESS';
export const GET_KINSHIPS_BY_ID_FAIL = 'GET_KINSHIPS_BY_ID_FAIL';

export const CREATE_KINSHIP_SUCCESS = 'CREATE_KINSHIP_SUCCESS';
export const CREATE_KINSHIP_FAIL = 'CREATE_KINSHIP_FAIL';

export const DELETE_KINSHIPS_SUCCESS = 'DELETE_KINSHIPS_SUCCESS';
export const DELETE_KINSHIPS_FAIL = 'DELETE_KINSHIPS_FAIL';

export const SEARCH_KINSHIP = 'SEARCH_KINSHIP';
export const SORT_KINSHIP_BY = 'SORT_KINSHIP_BY';

export const GET_KINSHIPS_BY_PEOPLE_SUCCESS = 'GET_KINSHIPS_BY_PEOPLE_SUCCESS';
export const GET_KINSHIPS_BY_PEOPLE_FAIL = 'GET_KINSHIPS_BY_PEOPLE_FAIL';

const INITIAL_STATE = {
    isFetch: false,
    data: [],
    error: null,
};

export function kinshipsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case KINSHIPS_REQUEST:
            return {
                ...state,
                isFetch: true,
            };
        case GET_KINSHIPS_SUCCESS:
            return {
                ...state,
                data: action.response.data,
                isFetch: false,
            };
        case GET_KINSHIPS_FAIL:      

        case GET_KINSHIPS_BY_ID_SUCCESS:
            return {
                ...state,
                kinById: action.response.data,
                isFetch: false,
            };
        case GET_KINSHIPS_BY_ID_FAIL:

        case CREATE_KINSHIP_SUCCESS:
            return {
                ...state,
                data: state.data.concat([action.kinship]),
                isFetch: false,
            };
        case CREATE_KINSHIP_FAIL:
            return {
                ...state,
                error: action.response.error,
                isFetch: false,
            };
        case DELETE_KINSHIPS_SUCCESS:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.id),
                isFetch: false,
            };
        case DELETE_KINSHIPS_FAIL:
            return {
                ...state,
                error: action.response.error,
                isFetch: false,
            };
        case SEARCH_KINSHIP:
            return {
                ...state,
                search: action.search,
            };
        case SORT_KINSHIP_BY:
            return {
                ...state,
                data: sortBy(action.key, state.data.slice()),
            };
        case GET_KINSHIPS_BY_PEOPLE_SUCCESS:
            return{
                ...state,
                data: action.response.data,
                isFetch: false,
            };
        case GET_KINSHIPS_BY_PEOPLE_FAIL:
            return {
                ...state,
                error: action.response.error,
                isFetch: false,
            };
        default:
            return state;
    }
}
