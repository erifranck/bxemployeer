import {
    DELETE_PEOPLE_FAIL,
    DELETE_PEOPLE_SUCCESS,
    GET_PEOPLE_FAIL,
    PEOPLE_REQUEST,
    GET_PEOPLE_SUCCESS, CREATE_PEOPLE_FAIL, CREATE_PEOPLE_SUCCESS, EDIT_PEOPLE_SUCCESS, EDIT_PEOPLE_FAIL
} from "../reducers/people";
import {deleteMock, myRequest} from "../../services/mockEmployeersService";
import {createPerson, deletePerson, getPeople, editPerson} from "../../services/peopleService";

const onFetch = () => (  { type: PEOPLE_REQUEST, } );

const getPeopleSuccess = (data) => ( { type: GET_PEOPLE_SUCCESS, response: data } );

const getPeopleFail = (error) =>  ({ type: GET_PEOPLE_FAIL, response: {error: error}});

const deletePeopleSuccess = (id) => ( { type: DELETE_PEOPLE_SUCCESS, id: id } );

const deletePeopleFail = (error) => ({ type: DELETE_PEOPLE_FAIL, response: { error: error } });

const createPeopleSuccess = (person) => ( { type: CREATE_PEOPLE_SUCCESS, person: person } );

const createPeopleFail = (error) =>  ({ type: CREATE_PEOPLE_FAIL, response: {error: error}});

const editPeopleSuccess = (person) => ( { type: EDIT_PEOPLE_SUCCESS, person: person } );

const editPeopleFail = (error) =>  ({ type: EDIT_PEOPLE_FAIL, response: {error: error}});

export function getPeopleRequest() {
    return (dispatch, getState) => {
        dispatch(onFetch());
        getPeople()
            .then(value => {

                dispatch(getPeopleSuccess({data: value}));
            })
            .catch(error => {
                dispatch(getPeopleFail(error));
            })
    }
}

export function deletePersonRequest(id) {
    return (dispatch, getState) => {
        dispatch(onFetch());
        deletePerson(id, 'http://localhost:8080/personAPI/employees')
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
                dispatch(createPeopleSuccess({...payload,id: Math.random()})); // Workaround to show employee on table. When the API returns the ID created that should replace the math.random
            })
            .catch(error => {
                dispatch(createPeopleFail(error));
            })
    }
}

export function editPersonRequest(payload) {
    return (dispatch, getState) => {
        dispatch(onFetch());
        editPerson(payload)
            .then( () => {
                dispatch(editPeopleSuccess({...payload,id: Math.random()}));  
            })
            .catch(error => {
                dispatch(editPeopleFail(error));
            })
    }
}
