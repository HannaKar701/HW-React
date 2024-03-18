import React from 'react';

export default function List({ value, onItemChange }) {
    const addValue = (index) => {
        const newData = [...value];
        newData[index] = '!!!' + newData[index];
        onItemChange(newData);
    };

    let finalItems = value.map((item, index) => (
        <li key={item.toString()}>
            <button onClick={() => addValue(index)}>Add !!!</button>
            {item}
        </li>
    ));

    return <ul>{finalItems}</ul>;
}
