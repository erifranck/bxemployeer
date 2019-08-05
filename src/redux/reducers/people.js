export const GET_PEOPLE_REQUEST = 'GET_PEOPLE_REQUEST';
export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const GET_PEOPLE_FAIL = 'GET_PEOPLE_FAIL';

export const DELETE_PEOPLE_REQUEST = 'DELETE_PEOPLE_REQUEST';
export const DELETE_PEOPLE_SUCCESS = 'DELETE_PEOPLE_SUCCESS';
export const DELETE_PEOPLE_FAIL = 'DELETE_PEOPLE_FAIL';

const INITIAL_STATE = {
    isFetch: false,
    data: [],
    error: null,
};

export function peopleReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PEOPLE_REQUEST:
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
        case DELETE_PEOPLE_REQUEST:
            return {
                ...state,
                isFetch: true,
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
        default:
            return state;
    }
}
