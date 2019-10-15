import React from 'react';

class Card extends React.Component {
  
  render() {
    return (
      <div className="github-profile">
        <img alt="headshots" src="https://placehold.it/75" />
        <div className="info">
          <div className="name"> Name here...</div>
          <div className="company">Company name...</div>
        </div>
      </div>
    )
  }
}

export default Card;