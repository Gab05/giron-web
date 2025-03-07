import React, { Component } from 'react';
import { ref, listAll, getDownloadURL } from "firebase/storage";

import ImageSlideshow from '../common/image-slideshow.component.tsx';

import './realisations.component.css';

interface RealisationsProps {
  storage: any;
}

interface RealisationsState {
  images: any[];
}

export default class Realisations extends Component<RealisationsProps, RealisationsState> {
  private loadingImages: boolean = false;

  constructor(props: RealisationsProps) {
    super(props);
    this.state = {
      images: [],
    }
  }

  componentDidMount(): void {
    if (!this.loadingImages) {
      this.loadingImages = true;
      // Fetch images URLs and update state
      const imgFolderRef = ref(this.props.storage, "slideshow_images/");
      const tempImages: string[] = [];
      listAll(imgFolderRef)
        .then(async (result) => {
          for (const fileRef of result.items) {
            const url = await getDownloadURL(fileRef);
            tempImages.push(url);
          }
        })
        .catch(e => console.warn("listAll error: ", e))
        .finally(() => {
          this.setState({
            images: tempImages
          })
        });
    }
  }

  render() {
    return (
      <div id="realisations" className="realisations-container">
        <div className='realisations-title-container level'>
          <i className="fa-solid fa-photo fa-lg realisations-icon level-item"></i>
          <div className='realisations-title level-item'>RÉALISATIONS</div>
        </div>
        <ImageSlideshow images={this.state.images} />
      </div>
    )
  }
}
