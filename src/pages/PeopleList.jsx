import React from 'react';
import Container, {ModalConsumer} from "../components/Container/Container";
import {Table} from "../components/Table/Table";
import {peopleListLabels} from "../constants/peopleData";
import {connect} from 'react-redux';
import {myRequest} from "../services/mockEmployeersService";
import {GET_PEOPLE_FAIL, GET_PEOPLE_REQUEST, GET_PEOPLE_SUCCESS} from "../redux/reducers/people";

class PeopleListComponent extends React.Component {
    componentDidMount() {
        this.props.getPeopleRequest();
        myRequest()
            .then(value => {
                this.props.getPeopleSuccess(value);
            })
            .catch(error => {
                this.props.getPeopleFail({error: error})
            })
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
                            onDelete={ (id) => toggleModal(true, null, () => console.log(id))()}
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
});

export const PeopleList = connect(mapStateToProps, mapDispatchToProps)(PeopleListComponent);
