import React from 'react';
import Form from './components/Form';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <h1>My form:</h1>
                <Form />
            </div>
        );
    }
}

export default App;
