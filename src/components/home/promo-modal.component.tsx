import React, { Component } from 'react';
import ReactModal from 'react-modal';

import promoImg from "../../assets/promo.png";
import promoPdf from "../../assets/reglement.pdf"

import './promo-modal.component.css';

export const promoUrl = "https://cdn.fbsbx.com/v/t59.2708-21/476481967_924690039749932_8888863979157469871_n.pdf/reglement.pdf?_nc_cat=100&ccb=1-7&_nc_sid=2b0e22&_nc_ohc=9rT9ZFmW-9wQ7kNvgFu8wGk&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AnQ2ayV-7m-CbGCbVbhsTnd&oh=03_Q7cD1gFDSCpsMCQ6LrxOClFQCb28Hx8OZ8siI6IgAsHh7Cyiew&oe=67AEFBDB&dl=1";

interface PromoModalProps {
  isOpen: boolean,
  closeHandler: () => void,
}

interface PromoModalState {

}

export default class PromoModal extends Component<PromoModalProps, PromoModalState> {
  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        style={
          {
            overlay: {
              zIndex: 100
            },
            content: {
              height: "fit-content",
              maxWidth: "940px",
              margin: "auto",
              left: "8px",
              right: "8px",
              padding: 0,
              backgroundColor: "#0C4739",
              overflow: "hidden"
            }
          }
        }
        id={"promo-modal"}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={this.props.closeHandler}
        appElement={document.getElementById("app")}
      >
        <div className="promo-container">
          <img src={promoImg} alt="image_promo"/>
          <button
              className="promo-close-button delete"
              onClick={this.props.closeHandler}
            />
        </div>
        <div className="promo-content">
          <div className="promo-text-content">
            <span>
              Obtenez un BBQ <strong className="promo-text-content">gratuitement</strong>* en
               faisant affaire avec Giron Entrepreneur Général pour
               votre prochain projet de rénovation d'un patio ou de réalisation d'une terrasse!
            </span>
          </div>
          <div className="promo-small-text-content">
            <span>*Certaines conditions s'appliquent. Consultez les détails pour en apprendre plus.</span>
          </div>
          <div className="promo-button-container">
            <button
              className={`promo-close-action-button promo-button button is-outlined`}
              onClick={this.props.closeHandler}
            >
              <span className="icon">
                <i className="far fa-times-circle"></i>
              </span>
              <span>Fermer</span>
            </button>
            <button
              className={`promo-button button`}
              onClick={() => {
                window.open(promoPdf, "_blank");
                this.props.closeHandler();
              }}
            >
              <span>Consulter les détails</span>
              
              <span className="icon">
                <i className="fas fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>

      </ReactModal>
    )
  }
}
