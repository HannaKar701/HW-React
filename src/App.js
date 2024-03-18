import React, { useRef } from 'react';
import ChildComponent from './components/ChildComponent.jsx';

import './App.css';

const LifecycleComponent = () => {
    const [state, setState] = React.useState([1, 2]);
    const link = useRef(null);
    const addFocus = () => link.current.focus();
    const addItem = (event) => {
        if (event.key === 'Enter') {
            setState((data) => [...data, link.current.value]);
        }
    };

    return (
        <>
            <input ref={link} onKeyDown={addItem}></input>
            <button onClick={addFocus}>Add focus</button>
            <ChildComponent value={state} onItemChange={setState} />
        </>
    );
};

export default LifecycleComponent;
