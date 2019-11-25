import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          {/*'♀' OR '♂' */} { /*if the gender is male then ? TRUE if : FALSE then female */}
          {this.props.pet.gender === "male" ? '♂' : '♀' } 
            
            {/*PET NAME*/}
            {this.props.pet.name}
          </a>
          <div className="meta">
          {/* PET TYPE*/}
            <span className="date">{this.props.pet.type}</span> 
          </div>
          <div className="description">
          {/* PET AGE*/}
            <p>Age:{this.props.pet.age}</p>
            {/* PET WEIGHT*/}
            <p>Weight:{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">

        {this.props.pet.isAdopted 
        ?<button className="ui disabled button">Already adopted</button> // if button is true 
        :<button className="ui primary button" onClick={() => this.props.adoptPet(this.props.pet)}> Adopt pet</button>  //and if false then 
        }

        </div>
      </div>
    )
  }
}

export default Pet
