import React from 'react';
import Container, {ModalConsumer} from "../components/Container/Container";
import {KinshipTable} from "../components/KinshipsTable/KinshipTable";
import {kinshipListLabels} from "../constants/peopleData";
import {connect} from 'react-redux';
import {deleteKinshipsRequest, getKinshipsRequest} from "../redux/actions/kinshipActions";

class KinshipListComponent extends React.Component {
    componentDidMount() {
        this.props.getKinshipsRequest();
    }

    deleteKinships(id){
        this.props.deleteKinshipsRequest(id);
    }
    render () {
        return (
            <Container>
                <ModalConsumer>
                    {({toggleModal, toggleKinshipDetails}) => (
                        <>
                            <KinshipTable
                                dataLabels={kinshipListLabels}
                                data={this.props.data}
                                onDeleteKinship={ (id) => toggleModal(true, null, () => this.deleteKinships(id))()}
                                editKinship={ (objectValue) => toggleKinshipDetails(true, objectValue)()}
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
    error: state.kinships.error
});
const mapDispatchToProps = (dispatch) => ({
    getKinshipsRequest: () => dispatch(getKinshipsRequest()),
    deleteKinshipsRequest: (id) => dispatch(deleteKinshipsRequest(id)),
});

export const KinshipList = connect(mapStateToProps, mapDispatchToProps)(KinshipListComponent);
