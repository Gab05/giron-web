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
          <p className="text">Giron Entrepreneur Général Inc. - Votre partenaire de confiance pour tous vos projets de construction et de rénovation, qu'ils soient résidentiels ou commerciaux.</p>
          <p className="text">De la planification aux finitions, nous prenons tout en main pour livrer un résultat impeccable, à la hauteur de vos attentes.</p>
          <p className="text">Qualité, expertise et souci du détail sont au cœur de notre engagement. Faites-nous confiance pour bâtir l'excellence!</p>
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
