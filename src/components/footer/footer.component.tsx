import React, { Component } from 'react'
import './footer.component.css';

interface FooterProps {

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
          © {new Date().getFullYear()} Tous droits réservés.
        </p>
      </div>
    )
  }
}
