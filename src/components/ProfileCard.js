import React from 'react'
import './ProfileCard.css'

export default class ProfilesCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };

    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.setState({ selected: !this.state.selected })
  }

  render () {
    const { selected } = this.state;
    return (
      <div className="col">
        <div className={`card h-100 card--profile shadow-sm ${(selected) ? 'card--selected' : ''}`} onClick={this.onClick}>
          <div className="card-select"><i className="fa fa-check" aria-hidden="true"></i></div>
          <img src={ this.props.avatar } className="card-img-top card-img-top--avatar" alt={ this.props.name } />
          <div className="card-body">
            <span className="card-text">{ this.props.type }</span>
            <h5 className="card-title">{ this.props.name }</h5>
          </div>
        </div>
      </div>
    )
  }
}