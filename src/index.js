import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/Root';
import ThemeProvider from './providers/ThemeProvider';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <Root />
    </ThemeProvider>,
);
