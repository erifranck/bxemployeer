import React from 'react';
import './container.css';
import {Header} from "../Header/Header";
import {Modal} from "../Modal/Modal";
import {DetailsEmployee} from "../DetailsEmployee/DetailsEmployee";
import {Popup} from "../Popup/Popup";

import {Button} from "../Button/Button"

const {Consumer, Provider} = React.createContext({});
export const ModalConsumer = Consumer;

export const popupContent = {
    NEW_EMPLOYEE: 'newEmployee',
    NEW_KINSHIP: 'newKinship',
}



class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            listeners: [],
            openDetails: false,
            objectValue: null,
            showPopup: false,
            content: '',
            sourceEmployee:'',
        };
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    closePopup() {
        this.setState({showPopup : false})
    }

    openPopup(content,id) {
        this.setState({showPopup : true, content: content, sourceEmployee: id})
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
           <Provider value={{openModal, toggleModal: this.toggleModal, openDetails, toggleDetails:this.toggleDetails, objectValue: objectValue, openPopup:this.openPopup}} >
               <div className="bx-dashboard-wrapper">
                   <div className="bx-dashboard-container">
                        <Header>
                            <Button addEmployeeButton={true} primary={true} onClick={ () => this.openPopup(popupContent.NEW_EMPLOYEE) }>
                                +
                            </Button>
                        </Header>
                       {this.props.children}

                        {
                            this.state.showPopup ?
                                <Popup 
                                    initialValues={this.state.objectValue || {}} 
                                    content={this.state.content} 
                                    sourceEmployee={this.state.sourceEmployee}
                                    closePopup={ () => this.closePopup() }
                                />
                            : null
                        }

                   </div>
                   <Modal confirmLabel={'Confirm'}
                          message={'Are you sure ?'}
                          openModal={this.state.openModal}
                          onCloseModal={this.toggleModal(false, false)}
                          onConfirmModal={this.toggleModal(false, true)}
                   />
                   <DetailsEmployee openDetails={this.state.openDetails && !this.state.showPopup}
                                    onCloseDetails={this.toggleDetails(false, null)}
                                    objectValue={objectValue || {}}
                                    onEdit={this.openPopup}
                   />
               </div>
           </Provider>
       )
    }
}

export default Container;
