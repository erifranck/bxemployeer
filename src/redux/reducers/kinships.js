import {sortBy} from "../../utils/methods";

export const KINSHIPS_REQUEST = 'KINSHIPS_REQUEST';
export const GET_KINSHIPS_SUCCESS = 'GET_KINSHIPS_SUCCESS';
export const GET_KINSHIPS_FAIL = 'GET_KINSHIPS_FAIL';

export const DELETE_KINSHIPS_SUCCESS = 'DELETE_KINSHIPS_SUCCESS';
export const DELETE_KINSHIPS_FAIL = 'DELETE_KINSHIPS_FAIL';

export const SEARCH_KINSHIP = 'SEARCH_KINSHIP';
export const SORT_KINSHIP_BY = 'SORT_KINSHIP_BY';

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
                data: sortBy(action.key, state.data),
            };
        default:
            return state;
    }
}