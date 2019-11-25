import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards"> 

  {this.props.pets.map(pet => <Pet pet={pet} adoptPet={this.props.adoptPet} />)} 

    </div>
  }
}

export default PetBrowser

    
// {/* add each pet in petbrowser */}
  // { /* using map to modify the array */}
    // {/* send this data to the pet browser*/}