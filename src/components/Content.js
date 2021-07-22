import React from 'react'
import './Content.css'
import ProfilesContainer from './ProfilesContainer'

export default class Content extends React.Component {
  render () {
    return (
      <main className="content">
        <div className="container">
          <h3 className="content__title">{ this.props.pageTitle }</h3>
          <ProfilesContainer profiles={ this.props.profiles }/>
        </div>
      </main>
    )
  }
}