import React from 'react';
import Container, {ModalConsumer} from "../components/Container/Container";
import {Table} from "../components/Table/Table";
import {peopleListLabels} from "../constants/peopleData";
import {connect} from 'react-redux';
import {deletePersonRequest, getPeopleRequest, sortPeopleBy} from "../redux/actions/peopleActions";
import {Searcher} from "../components/Searcher/Searcher";

class PeopleListComponent extends React.Component {
    componentDidMount() {
        this.props.getPeopleRequest();
    }

    componentDidUpdate(preProps){
        console.log(preProps, this.props);
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
                        <div classname='search-bar-container'>
                            <Searcher items={this.props.data}/>
                        </div>
                        <Table
                            dataLabels={peopleListLabels}
                            data={this.props.data.filter(items => {
                                const regex = new RegExp(this.props.searchValue);
                                console.log(regex.test(items.documentID), items.documentID);
                                return regex.test(items.documentID);
                            })}
                            onDelete={ (id) => toggleModal(true, null, () => this.deletePerson(id))()}
                            onClickColumn={(key) => this.props.sortPeopleBy(key)}
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
    searchValue: state.people.search
});
const mapDispatchToProps = (dispatch) => ({
    getPeopleRequest: () => dispatch(getPeopleRequest()),
    deletePeopleRequest: (id) => dispatch(deletePersonRequest(id)),
    sortPeopleBy: (key) => dispatch(sortPeopleBy(key)),
});

export const PeopleList = connect(mapStateToProps, mapDispatchToProps)(PeopleListComponent);
