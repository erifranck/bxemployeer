import React from 'react';
import {withRouter} from 'react-router-dom';
import Container, {ModalConsumer} from "../components/Container/Container";
import {KinshipTable} from "../components/KinshipsTable/KinshipTable";
import {kinshipListLabels} from "../constants/peopleData";
import {connect} from 'react-redux';
import {deleteKinshipsRequest, getKinshipsRequest} from "../redux/actions/kinshipActions";
import {Searcher} from "../components/Searcher/Searcher";
import {sortKinshipBy} from "../redux/actions/kinshipActions";


class KinshipListComponent extends React.Component {
    componentDidMount() {
        const { match, location, history } = this.props;
        this.props.getKinshipsRequest();
        if (match.params.id){

        }
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
                            <Searcher items={this.props.data}/>
                            <KinshipTable
                                dataLabels={kinshipListLabels}
                                data={this.props.data.filter(items => {
                                    const regex = new RegExp(this.props.searchValue);
                                    return regex.test(items.emlpoyeeSourceNames);
                                })}
                                onDeleteKinship={ (id) => toggleModal(true, null, () => this.deleteKinships(id))()}
                                editKinship={ (objectValue) => toggleKinshipDetails(true, objectValue)()}
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
    error: state.kinships.error,
    searchValue: state.kinships.search,
});
const mapDispatchToProps = (dispatch) => ({
    getKinshipsRequest: () => dispatch(getKinshipsRequest()),
    deleteKinshipsRequest: (id) => dispatch(deleteKinshipsRequest(id)),
    sortKinshipBy: (key) => dispatch(sortKinshipBy(key)),
});

export const KinshipList = connect(mapStateToProps, mapDispatchToProps)(withRouter(KinshipListComponent));
