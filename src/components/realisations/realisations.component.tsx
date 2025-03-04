import React, { Component } from 'react';

import ImageSlideshow from '../common/image-slideshow.component.tsx';
/* import * as imageSources from '../../assets/slideshow_images/'; */

import './realisations.component.css';

function importAll(r: any) {
  return r.keys().map(r);
}
// @ts-ignore
const images = importAll(require.context('../../assets/slideshow_images', false, /^\.\/.*$/));

interface RealisationsProps {

}

interface RealisationsState {

}

export default class Realisations extends Component<RealisationsProps, RealisationsState> {
  render() {
    return (
      <div id="realisations" className="realisations-container">
        <div className='realisations-title-container level'>
          <i className="fa-solid fa-photo fa-lg enterprise-icon level-item"></i>
          <div className='realisations-title level-item'>RÉALISATIONS</div>
        </div>
        <ImageSlideshow images={images} />
      </div>
    )
  }
}
