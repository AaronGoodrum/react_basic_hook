import React from 'react';
import Card from "./Card";

// Will need a List of card coming from data

class CardList extends React.Component {
  
  render() {
    return (
     <div> 
     {this.props.profiles.map(
        profile => 
        <Card key={profile.name} {...profile} />)
    }
    </div>
    )
  }
}

export default CardList;