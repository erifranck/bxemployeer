import React from 'react';
import Container from "../components/Container/Container";
import {Modal} from "../components/Modal/Modal";
import {Table} from "../components/Table/Table";
import {myRequest} from "../services/mockEmployeersService";
import '../App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
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
    render () {
        return (
            <>
                <div className="bx-wrapper" onClick={this.handleOpenModal}>
                    <Container>
                        <Table
                            data={this.state.data}
                            dataLabels={['Nombre', 'Apellido', 'Documento', 'Nacionalidad']}
                        />
                    </Container>
                </div>
                <Modal
                    message="are you sure?"
                    confirmLabel="confirm"
                    openModal={this.state.openModal}
                    onCloseModal={this.handleCloseModal}
                    onConfirmModal={this.handleConfirmModal}
                />
            </>
        );
    }
}

export default App;
