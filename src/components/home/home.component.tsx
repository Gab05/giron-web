import React, { Component } from 'react'

import homeBackground from '../../assets/giron-background-clean.jpeg';
import gironLogo from '../../assets/giron-logo-original.png';
import './home.component.css';

interface HomeComponentProps {

}

interface HomeComponentState {

}

export default class Home extends Component<HomeComponentProps, HomeComponentState> {
  render() {
    return (
      <div id='home' className="home-container">
        <div className="home-title-container">
          <img className="home-title" src={gironLogo} alt="home-title" />
        </div>
        <img className="home-background" src={homeBackground} alt="home-background" />
      </div>
    )
  }
}
