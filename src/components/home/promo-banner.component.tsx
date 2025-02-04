import React, { Component } from 'react'

import './promo-banner.component.css';

interface PromoBannerComponentProps {
  openPromoModal: () => void;
}

interface PromoBannerComponentState {

}

export default class PromoBanner extends Component<PromoBannerComponentProps, PromoBannerComponentState> {
  render() {
    return (
      <div onClick={this.props.openPromoModal} id="promo-banner" className="banner-container">
        <span className="promo-item">📣</span>
        <span className="promo-item">Promotion en cours!</span>
        <span className="promo-item">🎉</span>
        <span className="promo-item promo-link">En savoir plus</span>
      </div>
    )
  }
}
