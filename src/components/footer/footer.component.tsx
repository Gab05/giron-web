import React, { Component } from 'react'
import './footer.component.css';

interface FooterProps {
  openPromoModal: () => void;
}

interface FooterState {

}

export default class Footer extends Component<FooterProps, FooterState> {

  render() {
    return (
      <div className="footer-content">
        <p className="footer-text bold">
          Giron
        </p>
        <p className="footer-text">
          © 2025 Tous droits réservés.
        </p>
      </div>
    )
  }
}
