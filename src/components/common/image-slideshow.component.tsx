import React, { Component } from 'react';

import "./image-slideshow.component.css";

interface ImageSlideshowProps {
  images: any[]
}

interface ImageSlideshowState {
  currentIndex: number
}

export default class ImageSlideshow extends Component<ImageSlideshowProps, ImageSlideshowState> {
  constructor(props: ImageSlideshowProps) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  private handleNextSlide() {
    const nextIndex = (this.state.currentIndex + 1) % this.props.images.length;
    this.setState({
      currentIndex: nextIndex,
    });
  }

  private handlePreviousSlide() {
    const prevIndex = this.state.currentIndex === 0 ? this.props.images.length - 1 : this.state.currentIndex - 1
    this.setState({
      currentIndex: prevIndex,
    });
  }

  private handleThumbnailClick = (index) => {
    const imgButtonsElement = document.getElementById("image-slideshow-buttons");
    if (imgButtonsElement) {

      if (index > this.state.currentIndex) {
        // Scroll right
        imgButtonsElement.scrollLeft += 140;
      } else if (index < this.state.currentIndex) {
        // Scroll left
        imgButtonsElement.scrollLeft -= 140;
      }
    }

    this.setState({
      currentIndex: index
    });
  }

  render() {
    return (
      <div className="image-slideshow-container">
        <div className="image-slideshow-current">
          {this.props.images.map((slide, index) => {
            if (index === this.state.currentIndex) {
              return (
                <img
                  className={`image-slide active`}
                  src={slide}
                  alt={'img-slideshow-' + index}
                />
              )
            } else {
              return null;
            }
          })}
        </div>
        <div id='image-slideshow-buttons' className='image-slideshow-buttons'>
          {this.props.images.map((slide, index) => (
            <div
              key={index}
              className={`image-slideshow-thumbnail-container ${index === this.state.currentIndex ? 'active' : ''}`}
              onClick={() => this.handleThumbnailClick(index)}
            >
              <img
                className={`image-slideshow-thumbnail`}
                src={slide}
                alt={'img-thumbnail-' + index}
              />
            </div>
          )
          )}
        </div>
      </div>
    );
  }
};