import React from 'react';
import './container.css';
import {Header} from "../Header/Header";
import {Modal} from "../Modal/Modal";

const {Consumer, Provider} = React.createContext({});
export const ModalConsumer = Consumer;

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }
    }
    toggleModal = (value) => {
       this.setState({openModal: value});
    };
    render() {
       return (
           <Provider value={{...this.state, toggleModal: this.toggleModal}} >
               <div className="bx-dashboard-wrapper">
                   <div className="bx-dashboard-container">
                       <Header />
                       {this.props.children}
                   </div>
                   <Modal confirmLabel={'confirm'}
                          message={'are you sure ?'}
                          openModal={this.state.openModal}
                          onCloseModal={() => this.toggleModal(false)} />
               </div>
           </Provider>
       )
    }
}

export default Container;
