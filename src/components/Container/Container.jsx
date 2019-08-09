import React from 'react';
import './container.css';
import {Header} from "../Header/Header";
import {Modal} from "../Modal/Modal";
import {DetailsEmployee} from "../DetailsEmployee/DetailsEmployee";

const {Consumer, Provider} = React.createContext({});
export const ModalConsumer = Consumer;

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            listeners: [],
            openDetails: false,
            objectValue: null,
        }
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

    toggleDetails = (value, objectValue) => () => {
        this.setState({
            openDetails: value,
            objectValue: objectValue,
        });
    };

    render() {
        const {openModal, openDetails, objectValue} = this.state;
       return (
           <Provider value={{openModal, toggleModal: this.toggleModal, openDetails, toggleDetails:this.toggleDetails, objectValue: objectValue}} >
               <div className="bx-dashboard-wrapper">
                   <div className="bx-dashboard-container">
                       <Header />
                       {this.props.children}
                   </div>
                   <Modal confirmLabel={'Confirm'}
                          message={'Are you sure ?'}
                          openModal={this.state.openModal}
                          onCloseModal={this.toggleModal(false, false)}
                          onConfirmModal={this.toggleModal(false, true)}
                   />
                   <DetailsEmployee openDetails={this.state.openDetails}
                                    onCloseDetails={this.toggleDetails(false, null)}
                                    onConfirmDetails={() => alert("Employee updated")}
                                    objectValue={objectValue || {}}
                   />
               </div>
           </Provider>
       )
    }
}

export default Container;
