import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import BountyModal from './BountyModal.jsx';

class Modal extends Component {

  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.props.openModal({isOpen:true, modalType:"BOUNTY",modalProps:{}});
  }

  closeModal(){
    this.props.closeModal();
  }

  render(){
    if(this.props.modalType=="BOUNTY"){
      return (<BountyModal
        isOpen={this.props.isOpen}
        closeModal={this.closeModal}
      />
      );
    } else {
      return (<button onClick={this.openModal}>OPen modal</button>);
    }
  }
}

Modal.propTypes = {
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
  modalType: PropTypes.string
};

export default Modal;