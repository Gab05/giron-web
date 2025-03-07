import React, { Component } from 'react';

import "./image-slideshow.component.css";

interface ImageSlideshowProps {
  images: any[]
}

interface ImageSlideshowState {
  currentIndex: number;
  ready: boolean;
}

export default class ImageSlideshow extends Component<ImageSlideshowProps, ImageSlideshowState> {
  constructor(props: ImageSlideshowProps) {
    super(props);
    this.state = {
      currentIndex: 0,
      ready: false,
    }
  }

  private handleNextSlide() {
    const nextIndex = (this.state.currentIndex + 1) % this.props.images.length;
    this.setState({
      currentIndex: nextIndex,
    });
    this.scrollButtons(nextIndex);
  }

  private handlePreviousSlide() {
    const prevIndex = this.state.currentIndex === 0 ? this.props.images.length - 1 : this.state.currentIndex - 1
    this.setState({
      currentIndex: prevIndex,
    });
    this.scrollButtons(prevIndex);
  }

  private handleThumbnailClick = (index: number) => {
    this.setState({
      currentIndex: index
    });
    this.scrollButtons(index);
  }

  private scrollButtons(index: number) {
    const imgThumbnailsElement = document.getElementById("image-slideshow-thumbnails");
    if (imgThumbnailsElement) {
      if (index > this.state.currentIndex) {
        // Scroll right
        imgThumbnailsElement.scrollLeft += 140;
      } else if (index < this.state.currentIndex) {
        // Scroll left
        imgThumbnailsElement.scrollLeft -= 140;
      }
    }
  }

  componentDidUpdate(prevProps: Readonly<ImageSlideshowProps>, prevState: Readonly<ImageSlideshowState>, snapshot?: any): void {
    if (!this.state.ready) {
      this.setState({ ready: true });
    }
  }

  render() {
    return (
      <div className="image-slideshow-container">
        <div className={`image-slideshow-loading ${this.state.ready ? "hidden" : ""}`}>
          <div className="image-slideshow-loading-spinner">
            <i className="fa fa-circle-o-notch fa-spin"></i>
          </div>
        </div>
        <div className="image-slideshow-current">
          <div
            className={`image-slideshow-nav image-slideshow-prev ${this.state.ready ? "" : "hidden"}`}
            onClick={() => this.handlePreviousSlide()}
          >
            <button className="image-slideshow-nav-button image-slideshow-prev-icon">
              <i className='fa fa-arrow-left image-slideshow-nav-icon' />
            </button>
          </div>
          <div
            className={`image-slideshow-nav image-slideshow-next ${this.state.ready ? "" : "hidden"}`}
            onClick={() => this.handleNextSlide()}
          >
            <button className="image-slideshow-nav-button image-slideshow-next-icon">
              <i className='fa fa-arrow-right image-slideshow-nav-icon' />
            </button>
          </div>
          {this.props.images.map((slide, index) => (
            <img
              key={index}
              className={`image-slide ${index === this.state.currentIndex ? "active" : ""}`}
              src={slide}
              alt={'img-slideshow-' + index}
            />
          ))}
        </div>
        <div id='image-slideshow-thumbnails' className='image-slideshow-thumbnails'>
          {this.props.images.map((slide, index) => (
            <img
              key={index}
              id={`image-slideshow-thumbnail-${index}`}
              className={`image-slideshow-thumbnail ${index === this.state.currentIndex ? "active" : ""} wide`}
              src={slide}
              onClick={() => this.handleThumbnailClick(index)}
              alt={'img-thumbnail-' + index}
            />
          ))}
        </div>
      </div>
    );
  }
};