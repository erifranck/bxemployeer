import React from 'react';
import Container, {ModalConsumer} from "../components/Container/Container";
import {Table} from "../components/Table/Table";
import {peopleListLabels} from "../constants/peopleData";
import {connect} from 'react-redux';
import {deletePersonRequest, getPeopleRequest} from "../redux/actions/peopleActions";

class PeopleListComponent extends React.Component {
    componentDidMount() {
        this.props.getPeopleRequest();
    }

    deletePerson(id){
        this.props.deletePeopleRequest(id);
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
    getPeopleRequest: () => dispatch(getPeopleRequest()),
    deletePeopleRequest: (id) => dispatch(deletePersonRequest(id)),
});

export const PeopleList = connect(mapStateToProps, mapDispatchToProps)(PeopleListComponent);