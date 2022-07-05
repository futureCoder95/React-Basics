// import React, { Component } from 'react'

// export default class ClassComp extends Component {
//     render() {
//         return (
//             <>
//                 <h1>My Favorite Color is <strong>{this.props.colour}</strong></h1>
//                 <hr />
//                 <h2>I was born in the year <strong>{this.props.yeaar}</strong></h2>
//                 <hr />
//                 <h3>My Favorite Car is <strong>{this.props.modell}</strong></h3>
//                 <hr />
//             </>

//         )
//     }
// }

import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            car : "Lamborghini",
            price : "2M Dollars",
            year : "2022",
            speed : "200m/h",
            location :"USA",
            color : "Black",
            engine : "V12"
        }
    }

    changeColor = () => {
        this.setState({car : "Ferrari"})
    }

    changePrice = () => {
        this.setState({price : "4M Dollars"})
    }

    changeYear = () => {
        this.setState({year : "2020"})
    }

    changeSpeed = () => {
        this.setState({speed : "300m/h"})
    }

    changeLocation = () => {
        this.setState({location : "Germany"})
    }

    changeEngine = () => {
        this.setState({engine : "Twin Block V16 "})
    }
  render() {
    return (
      <div>
        <hr />
        <h1>Car is <b>{this.state.car}</b></h1> <hr />  <button onClick={this.changeColor}>Click To Change Car</button>
        <hr />
        <br />
        <h2>Available price is  <b>{this.state.price}</b></h2><hr /> <button onClick={this.changePrice}>Click To Change Price</button>
        <hr />
        <br />
        <h3>It was manufactured in the year <b>{this.state.year}</b></h3><hr />  <button onClick={this.changeYear}>Click To Change Price</button>
        <hr />
        <br />
        <h4>Highest speed is <b>{this.state.speed}</b></h4><hr />  <button onClick={this.changeSpeed}>Click To Change Price</button>
        <hr />
        <br />
        <h5>It was located in <b>{this.state.location}</b></h5><hr />  <button onClick={this.changeLocation}>Click To Change Location</button>
        <hr />
        <br />
        <h6>And the Engine is <b>{this.state.engine}</b> </h6><hr /> <button onClick={this.changeEngine}>Click To Change Engine</button>
        <hr />
        <br />
        <hr />
      {/* <h2>  Car is <b>{this.state.car}</b> available price is <b>{this.state.price}</b> and it was manufactured in the year <b>{this.state.year}</b> , highest speed is <b>{this.state.speed}</b> , It was located in <b>{this.state.location}</b> , Color is <b>{this.state.color}</b> , And the Engine is <b>{this.state.engine}</b> 
      </h2>
      <hr /> */}
      </div>
    )
  }
}




