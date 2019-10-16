import React from 'react';
import Card from "./Card";

class CardList extends React.Component {

  // handleDelete = (profile) => {
  //   console.log('Cardlist', profile)
  // }
  render() {
    return (
     <div> 
     {this.props.profiles.map(
        profile => (
          <React.Fragment key={profile.id}>
          <Card {...profile} onDelete={this.props.handleDelete}/>
          </React.Fragment>
        ))
    }
    </div>
    )
  }
}

export default CardList;