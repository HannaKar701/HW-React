import { useState, useRef } from 'react';
import ChildComponent from './components/ChildComponent.jsx';

import './App.css';

const App = () => {
    const [arrList, setArrList] = useState([1, 2]);
    const link = useRef(null);
    const addFocus = () => link.current.focus();
    const addItem = (event) => {
        if (event.key === 'Enter') {
            setArrList((data) => [...data, link.current.value]);
        }
    };

    return (
        <>
            <input ref={link} onKeyDown={addItem}></input>
            <button onClick={addFocus}>Add focus</button>
            <ChildComponent value={arrList} onItemChange={setArrList} />
        </>
    );
};

export default App;
