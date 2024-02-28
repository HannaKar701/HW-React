import React from 'react';
import ChildComponent from './components/ChildComponent';

import './App.css';
class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    increase = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    throwOff = () => {
        this.setState({ counter: 0 });
    };

    setRandomValue = () => {
        this.setState({ counter: Math.ceil(Math.random() * 10) });
    };

    reduce = () => {
        this.state.counter > 0
            ? this.setState({ counter: this.state.counter - 1 })
            : this.setState({ counter: this.state.counter });
    };

    render() {
        return (
            <div className="wrapper">
                <p>{this.state.counter}</p>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.throwOff}>Throw off</button>
                <button onClick={this.setRandomValue}>Random value</button>
                <button onClick={this.reduce}>Reduce</button>
                <ChildComponent name="Hanna" value={this.state.counter} />
            </div>
        );
    }
}

export default ParentComponent;
