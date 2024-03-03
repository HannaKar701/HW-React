import React from 'react';

import './App.css';

class LifecycleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFubmFhbmVjaGthMTExOTk5QGdtYWlsLmNvbSIsImlkIjoyODgsImlhdCI6MTcwOTM4MDI4OH0._kfiGuflpDTzJYNLPxZGp8aDC6J_Bu8hGXXuLulKYMM';
    }

    getList = async (param) => {
        try {
            let response = await fetch(
                `https://todo-redev.herokuapp.com/api/todos?isCompleted=${param}`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${this.token}`,
                    },
                },
            );
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    raiseCount = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    };

    componentDidMount() {
        this.getList(false);
    }

    shouldComponentUpdate() {
        return this.state.count % 2 !== 0;
    }

    componentDidUpdate() {
        console.log(`Count updated: ${this.state.count}`);
    }

    componentWillUnmount() {
        console.log('UnMount');
    }

    render() {
        return (
            <div>
                <p>Счет: {this.state.count}</p>
                <button onClick={this.raiseCount}>Увеличить</button>
            </div>
        );
    }
}

export default LifecycleComponent;
