import React from 'react';
import Container, {ModalConsumer} from "../components/Container/Container";
import {Table} from "../components/Table/Table";
import {peopleListLabels} from "../constants/peopleData";
import {connect} from 'react-redux';
import {myRequest} from "../services/mockEmployeersService";
import {
    DELETE_PEOPLE_FAIL,
    DELETE_PEOPLE_REQUEST,
    DELETE_PEOPLE_SUCCESS,
    GET_PEOPLE_FAIL,
    GET_PEOPLE_REQUEST,
    GET_PEOPLE_SUCCESS
} from "../redux/reducers/people";
import {deletePerson, getPeople} from "../services/peopleService";

class PeopleListComponent extends React.Component {
    componentDidMount() {
        this.props.getPeopleRequest();
        getPeople()
            .then(value => {
                this.props.getPeopleSuccess({data: value});
            })
            .catch(error => {
                this.props.getPeopleFail({error: error})
            })
    }

    deletePerson(id){
        this.props.deletePeopleRequest();
        deletePerson(id, 'http://localhost:8080/personAPI/employees')
            .then(() =>
            {
                this.props.deletePeopleSuccess(id);
                alert("Person with id: " + id + " deleted correctly")
            })
            .catch(error => {this.props.deletePeopleFail({error: error})})
    }
    render () {
        return (
            <Container>
                <ModalConsumer>
                {({toggleModal}) => (
                    <>
                        <Table
                            dataLabels={peopleListLabels}
                            data={this.props.data}
                            onDelete={ (id) => toggleModal(true, null, () => this.deletePerson(id))()}
                        />
                    </>
                )}
                </ModalConsumer>
                {this.props.error && 'the request has been failed'}
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
   data: state.people.data,
    error: state.people.error
});
const mapDispatchToProps = (dispatch) => ({
    getPeopleRequest: () => dispatch({type: GET_PEOPLE_REQUEST}),
    getPeopleSuccess: (response) => dispatch({type: GET_PEOPLE_SUCCESS, response: response}),
    getPeopleFail: (response) => dispatch({type: GET_PEOPLE_FAIL, response: response}),
    deletePeopleRequest: () => dispatch({type: DELETE_PEOPLE_REQUEST}),
    deletePeopleSuccess: (id) => dispatch({type: DELETE_PEOPLE_SUCCESS, id: id}),
    deletePeopleFail: (response) => dispatch({type: DELETE_PEOPLE_FAIL, response: response}),
});

export const PeopleList = connect(mapStateToProps, mapDispatchToProps)(PeopleListComponent);
