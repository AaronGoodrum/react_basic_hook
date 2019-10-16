import React from 'react';
import {Button} from 'reactstrap';

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
        <Button  color="danger" close onClick={() => this.props.onDelete(profile)}> X </Button>
      </div>
    )
  }
}

export default Card;