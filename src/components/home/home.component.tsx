import React, { Component } from 'react'
import { ref, getDownloadURL } from "firebase/storage";

import gironLogo from '../../assets/giron-logo-original.png';

import './home.component.css';

interface HomeComponentProps {
  storage: any
}

interface HomeComponentState {
  videoSrc?: any
  videoReady: boolean
}

export default class Home extends Component<HomeComponentProps, HomeComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      videoReady: false
    };
  }

  componentDidMount(): void {
    const videoRef = ref(this.props.storage, "/slideshow_videos/1234.mp4");
    getDownloadURL(videoRef)
      .then(url => {
        setTimeout(() => this.setState({
          videoSrc: url
        }), 2000);
      });
  };

  render() {
    return (
      <div id='home' className="home-container">
        <div className={`home-title-container ${this.state.videoReady ? "hidden" : ""}`}>
          <img className="home-title" src={gironLogo} alt="home-title" />
        </div>
        <div
          className={`home-background-img-container ${this.state.videoSrc ? "hidden" : ""}`}
        >
        </div>

        <div
          className={`home-background-video-container ${this.state.videoReady ? "active" : ""}`}
        >
          <video
            className={`home-background-video`}
            autoPlay
            muted
            loop
            playsInline
            onPlay={() => this.setState({ videoReady: true })}
          >
            {
              this.state.videoSrc && <source src={this.state.videoSrc} type={'video/mp4'} />
            }
          </video>
        </div>
      </div>
    )
  }
}
