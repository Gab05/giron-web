import React, { Component } from 'react'
import { Link } from 'react-scroll'
import gironLogo from '../../assets/giron-logo-clean.png';
import './header.component.css';

interface HeaderProps {

}

interface HeaderState {

}

export default class Header extends Component<HeaderProps, HeaderState> {
  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" id="navbar">
        <div className="navbar-brand">
          <a className="navbar-item logo-container" href="/">
            <img className="logo" alt="giron-logo" src={gironLogo} />
          </a>

          <button id="navbar-menu-toggle" className="navbar-burger" aria-label="menu" aria-expanded="false"
             data-target="navbar-menu" onClick={this.handleNavbarMenuClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbar-menu" className="navbar-menu">
          <div className="navbar-start">
            <Link
              className="navbar-item is-link header-link"
              activeClass="active"
              to="app"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
              onClick={this.handleNavbarMenuClick}
            >
              Accueil
            </Link>

            <Link
              className="navbar-item is-link header-link"
              activeClass="active"
              to="enterprise"
              spy={true}
              smooth={true}
              offset={-64}
              duration={100}
              onClick={this.handleNavbarMenuClick}
            >
              L'entreprise
            </Link>

            <Link
              className="navbar-item is-link header-link"
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-64}
              duration={100}
              onClick={this.handleNavbarMenuClick}
            >
              Services
            </Link>

            <Link
              className="navbar-item is-link header-link"
              activeClass="active"
              to="realisations"
              spy={true}
              smooth={true}
              offset={-64}
              duration={100}
              onClick={this.handleNavbarMenuClick}
            >
              Réalisations
            </Link>

            <Link
              className="navbar-item is-link header-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={100}
              onClick={this.handleNavbarMenuClick}
            >
              Contact
            </Link>
          </div>

          <div className="navbar-end"></div>
        </div>
      </nav>
    )
  }

  handleNavbarMenuClick() {
    const menuButton = document.getElementById('navbar-menu-toggle')
    const menu= document.getElementById('navbar-menu')

    if (menuButton!.classList.contains('is-active')) {
      menuButton!.classList.remove('is-active')
      menu!.classList.remove('is-active')
    } else {
      menuButton!.classList.add('is-active')
      menu!.classList.add('is-active')
    }
  }
}
