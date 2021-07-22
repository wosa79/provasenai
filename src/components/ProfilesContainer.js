import React from 'react'
import './ProfilesContainer.css'
import ProfileCard from './ProfileCard'

export default class ProfilesContainer extends React.Component {
  render () {
    return (
      <div className="shadow-sm profiles-card-container">
        <div className="row g-0">
          { this.props.profiles.map((profile, index) => {
            return <ProfileCard 
                    key={index}
                    avatar={ profile.picture.large }
                    type="Aluno"
                    name={profile.name.first + ' ' + profile.name.last}
                  />
          }) }
        </div>
      </div>
    )
  }
}