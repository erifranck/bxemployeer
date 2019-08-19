export const KINSHIP_REQUEST = 'KINSHIP_REQUEST';
export const CREATE_KINSHIP_SUCCESS = 'CREATE_KINSHIP_SUCCESS';
export const CREATE_KINSHIP_FAIL = 'CREATE_KINSHIP_FAIL';
export const GET_KINSHIP_SUCCESS = 'GET_KINSHIP_SUCCESS';
export const GET_KINSHIP_FAIL = 'GET_KINSHIP_FAIL';

const INITIAL_STATE = {
    isFetch: false,
    data: [],
    error: null,
};

export function kinshipsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case KINSHIP_REQUEST:
            return {
                ...state,
                isFetch: true,
            };
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
        case GET_KINSHIP_SUCCESS:
            return {
                ...state,
                data: action.response.data,
                isFetch: false,
            };
        case GET_KINSHIP_FAIL:
            return {
                ...state,
                error: action.response.error,
                isFetch: false,
            };
        
        default:
            return state;
    }
}
