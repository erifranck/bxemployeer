import React from 'react';
import './container.css';
import {Header} from "../Header/Header";
import {Modal} from "../Modal/Modal";
import {Popup} from "../Popup/Popup";
import {Button} from "../Button/Button"
const {Consumer, Provider} = React.createContext({});
export const ModalConsumer = Consumer;

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            showPopup: false,
            listeners: []
        }
    }

    closePopup() {
        this.setState({showPopup : false});
    }

    openPopup() {
        this.setState({showPopup : true});
    }

    toggleModal = (value, confirmValue, callback) => () => {
       this.setState({openModal: value});
       if(callback) {
           this.setState({
               listeners: this.state.listeners.concat([callback])
           })
       }
       if (confirmValue && this.state.listeners.length) {
           this.state.listeners.forEach(listener => listener());
           this.setState({listeners: []});
       }
    };
    render() {
        const {openModal} = this.state;
       return (
           <Provider value={{openModal, toggleModal: this.toggleModal}} >
               <div className="bx-dashboard-wrapper">
                   <div className="bx-dashboard-container">
                        <Header>
                            <Button addButton={true} primary={true} onClick={this.openPopup.bind(this)}>+</Button>
                        </Header>
                       {this.props.children}

                        {
                            this.state.showPopup ?
                                <Popup closePopup={this.closePopup.bind(this)}/>
                            : null
                        }

                   </div>
                   <Modal confirmLabel={'Confirm'}
                          message={'Are you sure ?'}
                          openModal={this.state.openModal}
                          onCloseModal={this.toggleModal(false, false)}
                          onConfirmModal={this.toggleModal(false, true)}
                   />
               </div>
           </Provider>
       )
    }
}

export default Container;
