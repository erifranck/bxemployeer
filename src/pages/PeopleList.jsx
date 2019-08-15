import React from 'react';
import Container, {ModalConsumer} from "../components/Container/Container";
import {Table} from "../components/Table/Table";
import {peopleListLabels} from "../constants/peopleData";
import {connect} from 'react-redux';
import {deletePersonRequest, getPeopleRequest} from "../redux/actions/peopleActions";
import {popupContent} from '../components/Container/Container';

class PeopleListComponent extends React.Component {
    componentDidMount() {
        this.props.getPeopleRequest();
    }

    deletePerson(id){
        this.props.deletePeopleRequest(id);
    }
    render () {

        var dataCopy = this.props.data
        console.log("data: ",this.props.data)

        dataCopy.forEach( (d) => console.log(d))

        console.log("dataCopy: ",dataCopy)

        
        return (
            <Container>
                <ModalConsumer>
                {({toggleModal, toggleDetails, openPopup}) => (

                    <>

                        <Table
                            dataLabels={peopleListLabels}
                            data={this.props.data}
                            onDelete={ (id) => toggleModal(true, null, () => this.deletePerson(id))()}
                            onAddKinship={ (id) => openPopup(popupContent.NEW_KINSHIP,id) }
                            onDetails={ (objectValue) => toggleDetails(true, objectValue)() }
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
