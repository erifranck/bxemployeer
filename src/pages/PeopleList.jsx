import React from 'react';
import Container, {ModalConsumer} from "../components/Container/Container";
import {Table} from "../components/Table/Table";
import {peopleListLabels} from "../constants/peopleData";
import {connect} from 'react-redux';
import {deletePersonRequest, getPeopleRequest, sortPeopleBy} from "../redux/actions/peopleActions";
import {Searcher} from "../components/Searcher/Searcher";
import {popupContent} from '../components/Container/Container';

class PeopleListComponent extends React.Component {
    componentDidMount() {
        this.props.getPeopleRequest();
    }

    componentDidUpdate(preProps){
       if(preProps !== this.props){
           this.setState(this.props);
       }
    }

    deletePerson(id){
        this.props.deletePeopleRequest(id);
    }
    render () {
        return (
            <Container>
                <ModalConsumer>
                {({toggleModal, toggleDetails, openPopup}) => (

                    <>
                            <Searcher items={this.props.data}/>
                        <Table
                            dataLabels={peopleListLabels}
                            data={this.props.data.filter(items => {
                                const regex = new RegExp(this.props.searchValue);
                                return regex.test(items.documentID);
                            })}
                            onDelete={ (id) => toggleModal(true, null, () => this.deletePerson(id))()}
                            onClickColumn={(key) => this.props.sortPeopleBy(key)}
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
    error: state.people.error,
    searchValue: state.people.search,
    //sortKey: state.people.key
});

const mapDispatchToProps = (dispatch) => ({
    getPeopleRequest: () => dispatch(getPeopleRequest()),
    deletePeopleRequest: (id) => dispatch(deletePersonRequest(id)),
    sortPeopleBy: (key) => dispatch(sortPeopleBy(key)),
});

export const PeopleList = connect(mapStateToProps, mapDispatchToProps)(PeopleListComponent);
