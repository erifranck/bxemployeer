import {
    KINSHIPS_REQUEST,
    CREATE_KINSHIP_SUCCESS,
    CREATE_KINSHIP_FAIL,
    UPDATE_KINSHIP_SUCCESS,
    UPDATE_KINSHIP_FAIL,
    DELETE_KINSHIPS_FAIL,
    DELETE_KINSHIPS_SUCCESS,
    GET_KINSHIPS_FAIL,
    GET_KINSHIPS_SUCCESS,
    GET_KINSHIPS_BY_ID_SUCCESS,
    GET_KINSHIPS_BY_ID_FAIL,
    SEARCH_KINSHIP,
    SORT_KINSHIP_BY,
    GET_KINSHIPS_BY_PEOPLE_SUCCESS,
    GET_KINSHIPS_BY_PEOPLE_FAIL
} from "../reducers/kinships";

import {createKinship, deleteKinships, getKinships, getKinshipById, getKinshipsPeople,updateKinship} from "../../services/kinshipsService";

const onFetch = () => (  { type: KINSHIPS_REQUEST, } );

const createKinshipSuccess = (kinship) => ( { type: CREATE_KINSHIP_SUCCESS, kinship: kinship } );

const createKinshipFail = (error) =>  ({ type: CREATE_KINSHIP_FAIL, response: {error: error}});

const updateKinshipSuccess = (kinship) => ( { type: UPDATE_KINSHIP_SUCCESS, kinship: kinship } );

const updateKinshipFail = (error) =>  ({ type: UPDATE_KINSHIP_FAIL, response: {error: error}});

const getKinshipsSuccess = (data) => ( { type: GET_KINSHIPS_SUCCESS, response: data } );

const getKinshipsFail = (error) =>  ({ type: GET_KINSHIPS_FAIL, response: {error: error}});

const getKinshipByIdSuccess = (data) => ( { type: GET_KINSHIPS_BY_ID_SUCCESS, response: data } );

const getKinshipByIdFail = (error) =>  ({ type: GET_KINSHIPS_BY_ID_FAIL, response: {error: error}});

const deleteKinshipsSuccess = (id) => ( { type: DELETE_KINSHIPS_SUCCESS, id: id } );

const deleteKinshipsFail = (error) => ({ type: DELETE_KINSHIPS_FAIL, response: { error: error } });

export const searchKinship = (search) => ({type: SEARCH_KINSHIP, search: search});

export const sortKinshipBy = (key) => ({type: SORT_KINSHIP_BY, key: key});

export const getKinshipsFromPeopleSuccess = (data) => ( { type: GET_KINSHIPS_BY_PEOPLE_SUCCESS, response: data } );

const getKinshipsFromPeopleFail = (error) =>  ({ type: GET_KINSHIPS_BY_PEOPLE_FAIL, response: {error: error}});

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
                dispatch(createKinshipSuccess({...payload}));
                alert("Kinship saved succesfully");
                window.location.reload();
            })
            .catch(error => {
                dispatch(createKinshipFail(error));
                alert(error)
            })
    }
}

export function getKinshipByIdRequest(id,callback) {
    return (dispatch) => {
        dispatch(onFetch());
        getKinshipById(id)
            .then(value => {
                dispatch(getKinshipByIdSuccess({data: value}))
                let kinshipInit = {}
                kinshipInit.kinshipId = id
                kinshipInit.sourceEmployee = value.idSource
                kinshipInit.targetEmployee = value.idTarget
                kinshipInit.kinship = value.type
                callback(kinshipInit)
            })
            .catch(error => {
                dispatch(getKinshipByIdFail(error));
            })
    }
}

export function updateKinshipRequest(payload) {
    return (dispatch) => {
        dispatch(onFetch());
        updateKinship(payload)
            .then( () => {
                dispatch(updateKinshipSuccess({...payload,id: Math.random()})); // Workaround to show employee on table. When the API returns the ID created that should replace the math.random
                alert("Kinship updated succesfully")
                window.location.reload();
            })
            .catch(error => {
                dispatch(updateKinshipFail(error));
                alert(error)
            })
    }
}

export function getKinshipsFromPeople(id) {
    return (dispatch, getState) => {
        dispatch(onFetch());
        getKinshipsPeople(id)
            .then(value => {
                dispatch(getKinshipsFromPeopleSuccess({data: value}))
            })
            .catch(error => {
                dispatch(getKinshipsFromPeopleFail(error));
            })
    }
}