import {
    KINSHIPS_REQUEST,
    CREATE_KINSHIP_SUCCESS,
    CREATE_KINSHIP_FAIL,
    DELETE_KINSHIPS_FAIL,
    DELETE_KINSHIPS_SUCCESS,
    GET_KINSHIPS_FAIL,
    GET_KINSHIPS_SUCCESS,
    SEARCH_KINSHIP,
    SORT_KINSHIP_BY,
} from "../reducers/kinships";

import {createKinship} from "../../services/kinshipsService";
import {deleteKinships, getKinships} from "../../services/kinshipsService";

const onFetch = () => (  { type: KINSHIPS_REQUEST, } );

const createKinshipSuccess = (kinship) => ( { type: CREATE_KINSHIP_SUCCESS, kinship: kinship } );

const createKinshipFail = (error) =>  ({ type: CREATE_KINSHIP_FAIL, response: {error: error}});

const getKinshipsSuccess = (data) => ( { type: GET_KINSHIPS_SUCCESS, response: data } );

const getKinshipsFail = (error) =>  ({ type: GET_KINSHIPS_FAIL, response: {error: error}});

const deleteKinshipsSuccess = (id) => ( { type: DELETE_KINSHIPS_SUCCESS, id: id } );

const deleteKinshipsFail = (error) => ({ type: DELETE_KINSHIPS_FAIL, response: { error: error } });

export const searchKinship = (search) => ({type: SEARCH_KINSHIP, search: search});

export const sortKinshipBy = (key) => ({type: SORT_KINSHIP_BY, key: key});

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

export function createKinshipRequest(payload) {
    return (dispatch) => {
        dispatch(onFetch());
        createKinship(payload)
            .then( () => {
                dispatch(createKinshipSuccess({...payload,id: Math.random()})); // Workaround to show employee on table. When the API returns the ID created that should replace the math.random
                alert("Kinship saved succesfully")
                window.location.reload();
            })
            .catch(error => {
                dispatch(createKinshipFail(error));
                alert(error)

            })
    }
}