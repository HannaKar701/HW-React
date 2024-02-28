import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    onClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.onClick}>Click to increase value</button>
            </div>
        );
    }
}

export default Form;
