import {
    KINSHIPS_REQUEST,
    CREATE_KINSHIP_SUCCESS,
    CREATE_KINSHIP_FAIL,
} from "../reducers/kinships";

import {createKinship} from "../../services/kinshipsService";

const onFetch = () => (  { type: KINSHIPS_REQUEST, } );

const createKinshipSuccess = (kinship) => ( { type: CREATE_KINSHIP_SUCCESS, kinship: kinship } );

const createKinshipFail = (error) =>  ({ type: CREATE_KINSHIP_FAIL, response: {error: error}});

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