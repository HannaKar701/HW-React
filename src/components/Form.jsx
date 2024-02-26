import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor called');
        this.state = {
            inputValue: '',
        };
    }

    componentDidMount() {
        console.log('ComponentDidMount called');
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate called');
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount called');
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', this.state.inputValue);
    };

    render() {
        console.log('Render called');
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;
