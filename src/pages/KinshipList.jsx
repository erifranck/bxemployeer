import React from 'react';
import {withRouter} from 'react-router-dom';
import Container, {ModalConsumer} from "../components/Container/Container";
import {KinshipTable} from "../components/KinshipsTable/KinshipTable";
import {kinshipListLabels} from "../constants/peopleData";
import {connect} from 'react-redux';
import {deleteKinshipsRequest, getKinshipsRequest, getKinshipByIdRequest, getKinshipsFromPeople} from "../redux/actions/kinshipsActions";
import {Searcher} from "../components/Searcher/Searcher";
import {sortKinshipBy} from "../redux/actions/kinshipsActions";
import {popupContent} from "../components/Container/Container";


class KinshipListComponent extends React.Component {
    componentDidMount() {
        const {match, location, history} = this.props;
        if (match.params.id)
            this.props.getKinshipsFromPeople(match.params.id);
        else
            this.props.getKinshipsRequest();
    }

    deleteKinships(id){
        this.props.deleteKinshipsRequest(id);
    }
    render () {
        return (
            <Container>
                <ModalConsumer>
                    {({toggleModal, openPopup}) => (
                        <>
                            <Searcher items={this.props.data}/>
                            <KinshipTable
                                dataLabels={kinshipListLabels}
                                data={this.props.data.filter(items => {
                                    if (items) {
                                        const regex = new RegExp(this.props.searchValue);
                                        return regex.test(items.employeeSourceNames);
                                    }
                                    return false
                                })}
                                onDeleteKinship={ (id) => toggleModal(true, null, () => this.deleteKinships(id))()}
                                onEditKinship={ (objectValue) => {
                                    this.props.getKinshipByIdRequest(objectValue.id,(kinshipInit) => openPopup(popupContent.NEW_KINSHIP,kinshipInit))  
                                }
                                }
                                onClickColumn={(key) => this.props.sortKinshipBy(key)}
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
    data: state.kinships.data,
    kinById: state.kinships.kinById,
    error: state.kinships.error,
    searchValue: state.kinships.search,
});
const mapDispatchToProps = (dispatch) => ({
    getKinshipsRequest: () => dispatch(getKinshipsRequest()),
    deleteKinshipsRequest: (id) => dispatch(deleteKinshipsRequest(id)),
    sortKinshipBy: (key) => dispatch(sortKinshipBy(key)),
    getKinshipByIdRequest: (id,callback) => dispatch(getKinshipByIdRequest(id,callback)),
    getKinshipsFromPeople: (id) => dispatch(getKinshipsFromPeople(id)),

});

export const KinshipList = connect(mapStateToProps, mapDispatchToProps)(withRouter(KinshipListComponent));
