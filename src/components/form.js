import { Component, createRef } from 'react';

export default class Form extends Component {
    inputRef = createRef();

    handleClick = () => {
        console.log(this.inputRef.current)
        this.inputRef.current.focus();
    }

    render() {
        return (
            <>
                <input ref={this.inputRef} />
                <button onClick={this.handleClick}>
                    Focus the input
                </button>
            </>
        );
    }
}
/*
input ref can store anything except element or not
 */