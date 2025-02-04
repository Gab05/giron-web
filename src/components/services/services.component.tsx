import React, { Component } from 'react'
import './services.component.css'

interface ServicesProps {

}

interface ServicesState {

}

export default class Services extends Component<ServicesProps, ServicesState> {
  render() {
    return (
      <div id="services" className="services-container">
        <div className="services-title-container level">
          <i className="fa-solid fa-screwdriver-wrench fa-lg services-icon level-item"></i>
          <div className="services-title level-item">SERVICES</div>
        </div>
        <div className="services-content">
          <div className="services-content-row level">
            <div className="service maison-neuve level-item">
              <p className="service-name">Maison neuve</p>
            </div>
            <div className="service ajout-etage level-item">
              <p className="service-name">Ajout d'étage</p>
            </div>
            <div className="service agrandissement level-item">
              <p className="service-name">Agrandissement</p>
            </div>
          </div>
          <div className="services-content-row level">
            <div className="service pose-plancher level-item">
              <p className="service-name">Pose de plancher</p>
            </div>
            <div className="service toiture level-item">
              <p className="service-name">Toiture</p>
            </div>
            <div className="service revetement level-item">
              <p className="service-name">Revêtement extérieur</p>
            </div>
          </div>
          <div className="services-content-row level">
            <div className="service finition-interieure level-item">
              <p className="service-name">Finition intérieure</p>
            </div>
            <div className="service escaliers level-item">
              <p className="service-name">Escaliers</p>
            </div>
            <div className="service coffrage level-item">
              <p className="service-name">Coffrage</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
