import React from 'react';
import Container from "../components/Container/Container";
import {Modal} from "../components/Modal/Modal";
import {Table} from "../components/Table/Table";
import {myRequest} from "../services/mockEmployeersService";
import {Popup} from '../components/Popup/Popup';

import '../App.css';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            showPopup: false,
            data: [],
        }

    }
    componentDidMount() {
        myRequest().then((data) => {
            this.setState({data: data});
        })
    }

    handleOpenModal = () => {
        this.setState({openModal: true});
    };
    handleCloseModal = () => {
        this.setState({openModal: false});
    };
    handleConfirmModal = () => {
        this.setState({openModal: false});
        console.log("se confirmo la accion");
    };


    togglePopup = () => {
        this.setState({ showPopup: !this.state.showPopup });
    };


    render () {
        return (
            <>
                <div className="bx-wrapper" onClick={this.handleOpenModal}>
                    <Container>
                        <Table
                            data={this.state.data}
                            dataLabels={['Nombre', 'Apellido', 'Documento', 'Nacionalidad']}
                        />

                        <hr></hr>
                        <button onClick={this.togglePopup.bind(this)}>Add Employee</button>

                        {this.state.showPopup ?
                            <Popup 
                                openFormPopup={this.state.openFormPopup}
                                closePopup={this.togglePopup.bind(this)}>
                            </Popup>
                        : null
                        }

                    </Container>
                </div>

               { /*<Modal
                    message="are you sure?"
                    confirmLabel="confirm"
                    openModal={this.state.openModal}
                    onCloseModal={this.handleCloseModal}
                    onConfirmModal={this.handleConfirmModal}
               />*/}

            </>
        );
    }
}

export default App;
