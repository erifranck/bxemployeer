import {
    DELETE_KINSHIPS_FAIL,
    DELETE_KINSHIPS_SUCCESS,
    GET_KINSHIPS_FAIL,
    KINSHIPS_REQUEST,
    GET_KINSHIPS_SUCCESS,
} from "../reducers/kinships";
import {deleteKinships, getKinships} from "../../services/kinshipsService";

const onFetch = () => (  { type: KINSHIPS_REQUEST, } );

const getKinshipsSuccess = (data) => ( { type: GET_KINSHIPS_SUCCESS, response: data } );

const getKinshipsFail = (error) =>  ({ type: GET_KINSHIPS_FAIL, response: {error: error}});

const deleteKinshipsSuccess = (id) => ( { type: DELETE_KINSHIPS_SUCCESS, id: id } );

const deleteKinshipsFail = (error) => ({ type: DELETE_KINSHIPS_FAIL, response: { error: error } });

export function getKinshipsRequest() {
    return (dispatch, getState) => {
        dispatch(onFetch());
        getKinships()
            .then(value => {
                dispatch(getKinshipsSuccess({data: value}))
            })
            .catch(error => {
                dispatch(getKinshipsFail(error));
            })
    }
}

export function deleteKinshipsRequest(id) {
    return (dispatch, getState) => {
        dispatch(onFetch());
        deleteKinships(id, 'http://localhost:8080/personAPI/kinships')
            .then(() => {
                dispatch(deleteKinshipsSuccess(id));
                alert("Kinship with id: " + id + " deleted correctly")
            })
            .catch(error => {
                dispatch(deleteKinshipsFail(error));
            })
    }
}