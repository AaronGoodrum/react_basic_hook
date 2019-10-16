import React from 'react';
import DeleteButton from './DeleteButton'

class Card extends React.Component {

  render() {
    const profile = this.props
    return (
      <div className="github-profile">
        <img alt={profile.name} src={profile.avatar_url} />
        <div className="info">
          <div className="name"> {profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
        <DeleteButton onClick={this.removeProfile}/>
      </div>
    )
  }
}

export default Card;