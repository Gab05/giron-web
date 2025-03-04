import React, { Component } from 'react'
/* 
import homeBackground from '../../assets/giron-background-clean.jpeg';
import gironLogo from '../../assets/giron-logo-original.png'; */
import introVideo from '../../assets/intro_video.mp4';

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
{/*           <img className="home-title" src={gironLogo} alt="home-title" /> */}
        </div>
        <video className="home-background" autoPlay muted loop playsInline>
          <source src={introVideo} type={'video/mp4'} />
        </video>
      {/* <img className="home-background" src={homeBackground} alt="home-background" /> */}
      </div>
    )
  }
}
