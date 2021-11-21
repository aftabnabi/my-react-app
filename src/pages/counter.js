//import react from 'react';
import React, { Component } from 'react';
//create class counter with constructor
export default class Counter extends Component {
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: '',
            age: 0
        }
    }
    //methods
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    //render method
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <h2>{this.props.name}</h2>
                <h2>{this.props.age}</h2>
            </div>
        )
    }
}