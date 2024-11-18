import React, {Component} from "react";
import PropTypes from 'prop-types';
export default class Counter extends Component {
    static propTypes = {
        name :PropTypes.string
    }
    state = {
        age: 42,
    };
    componentDidMount() {
        console.log("successfully mounted")
    }

    componentDidUpdate(prevProps,  currentState)
    {
        console.log(this.state.age)
        console.log("component did updated")
        console.log(currentState.age)
    }
    shouldComponentUpdate(nextProps, nextState)
    {

        console.log("bef ", nextProps.name)
        console.log("next ", nextState.name)
        return true;
        return false; // if u don't want it to be updated

    }
    handleAgeChange = () => {
        this.setState({
            age: this.state.age + 1
        });
    };

    render() {
        console.log("I'm Dhiraj")
        return (
            <>
                <button onClick={this.handleAgeChange}>
                    Increment age
                </button>
                <p>You are {this.state.age}.</p>
            </>
        );
    }
}
