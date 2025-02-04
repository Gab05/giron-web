import React, { Component } from 'react'
import { Link } from 'react-scroll'

import ModalButton from '../common/modal-button.component.tsx'

import './enterprise.component.css'

interface EnterpriseProps {
  openSubmissionModal: () => void
}

interface EnterpriseState {

}

export default class Enterprise extends Component<EnterpriseProps, EnterpriseState> {
  render() {
    return (
      <div id="enterprise" className="enterprise-container">
        <div className='enterprise-title-container level'>
          <i className="fa-solid fa-building fa-lg enterprise-icon level-item"></i>
          <div className='enterprise-title level-item'>L'ENTREPRISE</div>
        </div>
        <div className='enterprise-content'>
          <p className="text">Nous sommes une jeune entreprise œuvrant dans la construction et la rénovation résidentielle et commerciale dans la région de Québec.</p>
          <p className="text">Notre objectif est d'aider les jeunes familles d'ici à réaliser à la perfection leur projet de construction ou de rénovation.</p>
          <div className="text">
            <ModalButton text='Écrivez-nous à propos de votre projet' openModal={this.props.openSubmissionModal} />
          </div>
        </div>
      </div>
    )
  }
}
