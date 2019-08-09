import {
    DELETE_PEOPLE_FAIL,
    DELETE_PEOPLE_SUCCESS,
    GET_PEOPLE_FAIL,
    PEOPLE_REQUEST,
    GET_PEOPLE_SUCCESS, CREATE_PEOPLE_FAIL, CREATE_PEOPLE_SUCCESS
} from "../reducers/people";
import {deleteMock, myRequest} from "../../services/mockEmployeersService";
import {createPerson, deletePerson, getPeople} from "../../services/peopleService";

const onFetch = () => (  { type: PEOPLE_REQUEST, } );

const getPeopleSuccess = (data) => ( { type: GET_PEOPLE_SUCCESS, response: data } );

const getPeopleFail = (error) =>  ({ type: GET_PEOPLE_FAIL, response: {error: error}});

const deletePeopleSuccess = (id) => ( { type: DELETE_PEOPLE_SUCCESS, id: id } );

const deletePeopleFail = (error) => ({ type: DELETE_PEOPLE_FAIL, response: { error: error } });

const createPeopleSuccess = (person) => ( { type: CREATE_PEOPLE_SUCCESS, person: person } );

const createPeopleFail = (error) =>  ({ type: CREATE_PEOPLE_FAIL, response: {error: error}});

export function getPeopleRequest() {
    return (dispatch, getState) => {
        dispatch(onFetch());
        myRequest()
            .then(value => {
                dispatch(getPeopleSuccess(value));
            })
            .catch(error => {
                dispatch(getPeopleFail(error));
            })
    }
}

export function deletePersonRequest(id) {
    return (dispatch, getState) => {
        dispatch(onFetch());
        deleteMock(id, 'http://localhost:8080/personAPI/employees')
            .then(() => {
                dispatch(deletePeopleSuccess(id));
                alert("Person with id: " + id + " deleted correctly")
            })
            .catch(error => {
                dispatch(deletePeopleFail(error));
            })
    }
}

export function createPersonRequest(payload) {
    return (dispatch, getState) => {
        dispatch(onFetch());
        createPerson(payload)
            .then( () => {
                dispatch(createPeopleSuccess({...payload,id: Math.random()}));
            })
            .catch(error => {
                dispatch(createPeopleFail(error));
            })
    }
}
