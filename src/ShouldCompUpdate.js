import React, { Component } from 'react'

export default class ShouldCompUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = { favoriteGame: "God Of War" }
    }

    shouldComponentUpdate() {
        return true;
    }

    changeStaate = () => {
        this.setState({ favoriteGame: "Call Of Duty" })
    }

    render() {
        return (
            <div>
                <h1>My Favorite Game is {this.state.favoriteGame}</h1>
                <button onClick={this.changeStaate}>Click To change game</button>
            </div>
        )
    }
}
