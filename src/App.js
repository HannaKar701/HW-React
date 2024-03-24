import { useState, useRef } from 'react';
import ChildComponent from './components/ChildComponent.jsx';
import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/useDarkMode';
import Toggle from './components/Toggler';

import './App.css';

const App = () => {
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const [arrList, setArrList] = useState([1, 2]);
    const link = useRef(null);
    const addFocus = () => link.current.focus();
    const addItem = (event) => {
        if (event.key === 'Enter') {
            setArrList((data) => [...data, link.current.value]);
        }
    };

    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <input ref={link} onKeyDown={addItem}></input>
                <button onClick={addFocus}>Add focus</button>
                <ChildComponent value={arrList} onItemChange={setArrList} />
                <br />
                <Toggle theme={theme} toggleTheme={themeToggler} />
            </>
        </ThemeProvider>
    );
};

export default App;
