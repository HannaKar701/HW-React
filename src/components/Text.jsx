import { useState } from 'react';

function Text({ text }) {
    const [state, setState] = useState(false);

    function hideText() {
        setState(!state);
    }

    return (
        <div>
            <h2>{text}</h2>
            {state && <p>В компоненты передать props</p>}
            <button onClick={hideText}>Show/Hide text</button>
        </div>
    );
}

export default Text;
