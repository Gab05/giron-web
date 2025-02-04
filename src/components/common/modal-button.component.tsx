import React, { Component } from 'react';
import './modal-button.component.css';

interface ModalButtonProps {
  openModal: () => void,
  text?: string,
}

interface ModalButtonState {

}

export default class ModalButton extends Component<ModalButtonProps, ModalButtonState> {
  render() {
    return (
      <div className="modal-button-container">
        <button onClick={this.props.openModal} className="button is-small modal-button">
          <span>{this.props.text ?? "Soumission en ligne"}</span>
          <i className="fa-solid fa-pencil-square-o button-icon level-item"></i>
        </button>
      </div>
    )
  }
}
