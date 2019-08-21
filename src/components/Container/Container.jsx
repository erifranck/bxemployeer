import React from 'react';
import {Header} from "../Header/Header";
import {Modal} from "../Modal/Modal";
import {DetailsEmployee} from "../DetailsEmployee/DetailsEmployee";
import {Popup} from "../Popup/Popup";
import {Button} from "../Button/Button"
import './container.css';

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
            kinshipInit: {
                sourceEmployee: null,
                targetEmployee: null,
                kinship: null,
            },
        };
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    closePopup() {
        this.setState({showPopup : false})
    }

    openPopup(content,kinshipInit) {
        this.setState({
            showPopup : true,
            content: content, 
            kinshipInit: kinshipInit
        })
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
           <Provider value={{openModal, toggleModal: this.toggleModal,
                openDetails, toggleDetails:this.toggleDetails, objectValue: objectValue, openPopup:this.openPopup}}
                
           >
               <div className="bx-dashboard-wrapper">
                   <div className="bx-dashboard-container">
                        <Header>
                            <Button 
                                title={"Add new person"} 
                                addEmployeeButton={true} 
                                primary={true} 
                                onClick={() => this.openPopup(popupContent.NEW_EMPLOYEE,null)}
                            >
                                <i className="fas fa-user-plus"/>
                            </Button>
                            <Button 
                                title={"Add new kinship"} 
                                addKinship={true} 
                                primary={true} 
                                onClick={() => {
                                    let kinshipInit = {}
                                    kinshipInit.sourceEmployee = null
                                    kinshipInit.targetEmployee = null
                                    kinshipInit.kinship = null
                                    return this.openPopup(popupContent.NEW_KINSHIP,kinshipInit)
                                    }
                                }>
                                    <i className="fas fa-users"/>
                                </Button>

                        </Header>
                       {this.props.children}

                        {
                            this.state.showPopup ?
                                <Popup 
                                    initialValues={this.state.objectValue || {}} 
                                    content={this.state.content} 
                                    kinshipInit={this.state.kinshipInit}
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
                                    onEdit={ () => this.openPopup(popupContent.NEW_EMPLOYEE) }
                   />
               </div>
           </Provider>
       )
    }
}

export default Container;
