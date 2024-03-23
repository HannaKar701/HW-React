import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

function arePropsEqual(oldProps, newProps) {
    return (
        oldProps.value.length === newProps.value.length &&
        oldProps.value.every((oldData, index) => {
            const newData = newProps.value[index];
            return oldData === newData;
        })
    );
}

const List = ({ value, onItemChange }) => {
    const addValue = (index) => {
        const newData = [...value];
        newData[index] = '!!!' + newData[index];
        onItemChange(newData);
    };

    let finalItems = value.map((item, index) => (
        <li key={uuidv4()}>
            <button onClick={() => addValue(index)}>Add !!!</button>
            {item}
        </li>
    ));

    return <ul>{finalItems}</ul>;
};

export default memo(List, arePropsEqual);
