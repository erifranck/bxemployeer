export const PEOPLE_REQUEST = 'KINSHIPS_REQUEST';
export const GET_PEOPLE_SUCCESS = 'GET_KINSHIPS_SUCCESS';
export const GET_PEOPLE_FAIL = 'GET_KINSHIPS_FAIL';

export const DELETE_PEOPLE_SUCCESS = 'DELETE_KINSHIPS_SUCCESS';
export const DELETE_PEOPLE_FAIL = 'DELETE_KINSHIPS_FAIL';

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
                isFetch: false,
                data: state.data.filter(item => item.id !== action.id)
            };
        case DELETE_KINSHIPS_FAIL:
            return {
                ...state,
                isFetch: false,
                error: action.response.error,
            };
        default:
            return state;
    }
}