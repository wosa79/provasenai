import React from 'react'
import logo from '../imgs/logo_topo.png'
import './Header.css'

export default class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="FIERGS/SENAI" width="170" height="25" />
        </div>
        <div className="header__breadcrumb">
          <span>{ this.props.course }</span>
          <span> - | { this.props.classNumber } (Filial { this.props.filial }) | </span>
          <span>{ this.props.pageLocation }</span>
        </div>
      </header>
    )
  }
}