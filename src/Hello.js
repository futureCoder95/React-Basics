import React, { Component } from 'react'

class Hello extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Nissan",
            model : "Skyline GTR",
            color : "Blue",
            year : 2020
        }
    }

    render(){
        return (
            <div>
                <h1> My Car name is {this.state.name} </h1>

                <h2> The model is <b> {this.state.model}</b> and the color is <b> {this.state.color} </b> and it was manufactured in the year <b> {this.state.year}</b>  </h2><hr/>
            </div>
        )
    }
}

export default Hello;