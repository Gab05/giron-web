import React, { Component } from 'react'
import './contact.component.css'

interface ContactProps {

}

interface ContactState {

}

export default class Contact extends Component<ContactProps, ContactState> {
  render() {
    return (
      <div id="contact" className="contact-container">
        <div className="contact-title-container level">
          <i className="fa-solid fa-message contact-icon level-item"></i>
          <div className="contact-title level-item">NOUS JOINDRE</div>
        </div>
        <div className="contact-content-container">
          <div className="contact-content">
            <h2 className="contact-subtitle">Contactez-nous dès maintenant pour réaliser le projet de vos rêves!</h2>
            <div className="method-group">
              <i className="fa-solid fa-envelope"></i>
              <a className="contact-method" href="mailto:info@gironentrepreneur.com">info@gironentrepreneur.com</a>
            </div>
            <div className="method-group">
              <i className="fa-solid fa-phone"></i>
              <a className="contact-method" href="tel:+15813087581">581-308-7581</a>
            </div>
            <div className="method-group">
              <i className="fa-solid fa-phone"></i>
              <a className="contact-method" href="tel:+15819849831">581-984-9831</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
