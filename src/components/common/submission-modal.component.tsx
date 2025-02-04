import React, { Component } from 'react';
import ReactModal from 'react-modal';

import { postSubmissionRequest, triggerSubmissionMetaEvent } from '../../api/giron-api.ts';

import './submission-modal.component.css';
import { MetaEventName } from '../../meta-event/meta-event.ts';

interface SubmissionModalProps {
  isOpen: boolean,
  closeHandler: () => void,
}

interface SubmissionModalState {
  loading: boolean;
  success: boolean | null;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  message: string;
}

export default class SubmissionModal extends Component<SubmissionModalProps, SubmissionModalState> {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      success: null,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      postalCode: "",
      city: "",
      message: ""
    }
  }

  private closeHandler = () => {
    this.setState(() => ({ loading: false, success: null }))
    this.props.closeHandler()
  }

  private submitHandler = () => {
    this.setState(() => ({ loading: true }));
    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      postalCode: this.state.postalCode,
      city: this.state.city,
      message: this.state.message
    };
    console.log("Submitting Form with payload", payload);
    postSubmissionRequest(payload)
      .then(() => {
        console.log("Sending submission meta event")
        triggerSubmissionMetaEvent(MetaEventName.submissionRequest, payload)
          .then(() => {
            console.log("Meta event success")
            this.setState(() => ({
              loading: false,
              success: true,
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              address: "",
              postalCode: "",
              message: ""
            }));
          })
          .catch(() => this.setState(() => ({ loading: false, success: false })))
      })
      .catch(() => this.setState(() => ({ loading: false, success: false })))
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        style={
          {
            overlay: { zIndex: 100 },
            content: {
              maxHeight: "960px",
              maxWidth: "1600px",
              margin: "auto",
              left: "8px",
              right: "8px"
            }
          }
        }
        id={"submission-modal"}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={this.closeHandler}
        appElement={document.getElementById("app")}
      >
        <div className="close-button-container">
          <button
            className="close-button delete"
            onClick={this.closeHandler}
            disabled={this.state.loading}
          />
        </div>
        {this.state.success === true &&
          <>
            <div className="success-container">
              <div className="level success-content">
                <span className="success-content">Demande envoyée</span>
                <span className="success-content icon has-text-success">
                  <i className="fas fa-circle-check"></i>
                </span>
              </div>

              <button
                className={`success-button button is-info is-rounded`}
                onClick={this.closeHandler}
              >
                OK
              </button>
            </div>
          </>
        }
        {!this.state.success &&
          <>
            <div className="modal-title-container">
              <div className="modal-title">Demande de soumission en ligne</div>
              <div className="modal-subtitle">Faites-nous part de votre projet pour obtenir une soumission rapide, ou contactez-nous simplement pour une demande d'information</div>

            </div>
            <div className="level">
              <div className="modal-field level-item">
                <label className="label modal-label" htmlFor="firstName">
                  Prénom
                  <span className="modal-required">*</span>
                </label>
                <input
                  name="firstName"
                  autoComplete="given-name"
                  className="input"
                  type="text"
                  placeholder="Prénom"
                  required
                  disabled={this.state.loading}
                  onChange={(e) => this.setState(() => ({ firstName: e.target.value }))}
                />
              </div>
              <div className="modal-field level-item">
                <label className="label modal-label" htmlFor="lastName">
                  Nom de famille
                  <span className="modal-required">*</span>
                </label>
                <input
                  name="lastName"
                  autoComplete="family-name"
                  className="input"
                  type="text"
                  placeholder="Nom de famille"
                  required
                  disabled={this.state.loading}
                  onChange={(e) => this.setState(() => ({ lastName: e.target.value }))}
                />
              </div>
            </div>
            <div className="level">
              <div className="modal-field level-item">
                <label className="label modal-label" htmlFor="email">
                  Adresse courriel
                  <span className="modal-required">*</span>
                </label>
                <input
                  name="email"
                  autoComplete="email"
                  className="input"
                  type="email"
                  placeholder="Adresse courriel"
                  required
                  disabled={this.state.loading}
                  onChange={(e) => this.setState(() => ({ email: e.target.value }))}
                />
              </div>
              <div className="modal-field level-item">
                <label className="label modal-label" htmlFor="tel">
                  Numéro de téléphone
                  <span className="modal-required">*</span>
                </label>
                <input
                  name="tel"
                  autoComplete="tel"
                  className="input"
                  type="text"
                  placeholder="Numéro de téléphone"
                  pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
                  required
                  disabled={this.state.loading}
                  onChange={(e) => this.setState(() => ({ phone: e.target.value }))}
                />
              </div>
            </div>
            <div className="level">
              <div className="modal-field-full level-item">
                <label className="label modal-label" htmlFor="address">
                  Adresse résidentielle ou commerciale
                </label>
                <input
                  name="address"
                  autoComplete="address-line1"
                  className="input"
                  type="text"
                  placeholder="Numéro civique et rue"
                  disabled={this.state.loading}
                  onChange={(e) => this.setState(() => ({ address: e.target.value }))}
                />
              </div>
            </div>
            <div className="level">
              <div className="modal-field level-item">
                <label className="label modal-label" htmlFor="city">
                  Ville
                </label>
                <input
                  name="city"
                  autoComplete="home city"
                  className="input"
                  type="text"
                  placeholder="Ville"
                  disabled={this.state.loading}
                  onChange={(e) => this.setState(() => ({ city: e.target.value }))}
                />
              </div>
              <div className="modal-field level-item">
                <label className="label modal-label" htmlFor="postal-code">
                  Code postal
                </label>
                <input
                  name="postal-code"
                  autoComplete="postal-code"
                  className="input"
                  type="text"
                  placeholder="Code postal"
                  disabled={this.state.loading}
                  onChange={(e) => this.setState(() => ({ postalCode: e.target.value }))}
                />
              </div>
            </div>
            <div className="level">
              <div className="modal-description-container level-item">
                <label className="label modal-label" htmlFor="message">
                  Description
                  <span className="modal-required">*</span>
                </label>
                <textarea
                  name="message"
                  className="textarea"
                  placeholder="Votre message"
                  rows={6}
                  disabled={this.state.loading}
                  onChange={(e) => this.setState(() => ({ message: e.target.value }))}
                />
              </div>
            </div>
            {this.state.success === false &&
              <div className="error-content">
                Erreur lors de l'envoi de la demande. Vérifiez vos informations et rééssayez.
              </div>
            }
            <div className="action-button-container">
              <button
                className={`action-button button is-danger is-outlined`}
                disabled={this.state.loading}
                onClick={this.closeHandler}
              >
                <span className="icon">
                  <i className="far fa-times-circle"></i>
                </span>
                <span>Annuler</span>
              </button>
              <button
                className={`action-button button is-success ${this.state.loading ? "is-loading" : ""}`}
                disabled={!this.state.firstName
                  || !this.state.lastName
                  || !this.state.email
                  || !this.state.phone
                  || !this.state.message}
                onClick={this.submitHandler}
              >
                <span className="icon">
                  <i className="far fa-check-circle"></i>
                </span>
                <span>Soumettre</span>
              </button>
            </div>
          </>
        }
      </ReactModal>
    )
  }
}
