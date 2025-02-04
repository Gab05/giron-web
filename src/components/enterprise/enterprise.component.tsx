import React, { Component } from 'react'
import { Link } from 'react-scroll'
import './enterprise.component.css'

interface EnterpriseProps {

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
            <Link
              to="contact"
              activeClass="active"
              type="submit"
              spy={true}
              smooth={true}
              offset={-64}
              duration={100}
              className="is-link"
            >
              Écrivez-nous à propos de votre projet
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
