import React, { useState } from 'react';

export default function MyComponent() {
    const [state, setState] = useState('');

    function onChangeValue(event) {
        setState((state) => (state = event.target.value));
    }

    return (
        <div>
            <input type="text" onChange={onChangeValue} />
            <p>{state}</p>
        </div>
    );
}
