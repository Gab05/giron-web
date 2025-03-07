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
  }

  componentDidUpdate(prevProps: Readonly<ImageSlideshowProps>, prevState: Readonly<ImageSlideshowState>, snapshot?: any): void {
    if (!this.state.ready) {
      this.setState({ ready: true });
    }
  }

  getThumbnailClass(index: number): string {
    let className = "";
    const img = document.getElementById(`image-slideshow-thumbnail-${index}`);
      if ((img?.clientWidth || 0) > (img?.clientHeight || 0)) {
        className += " wide ";
      } else if ((img?.clientWidth || 0) < (img?.clientHeight || 0)) {
        className += " tall ";
      }
    
    if (index === this.state.currentIndex) {
      className += " active ";
    }

    return className;
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
          {this.props.images.map((slide, index) => {
            if (index === this.state.currentIndex) {
              return (
                <img
                  key={index}
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

              <img
                key={index}
                id={`image-slideshow-thumbnail-${index}`}
                className={`image-slideshow-thumbnail ${index === this.state.currentIndex ? "active" : ""} wide`}
                src={slide}
                onClick={() => this.handleThumbnailClick(index)}
                alt={'img-thumbnail-' + index}
              />

          )
          )}
        </div>
      </div>
    );
  }
};