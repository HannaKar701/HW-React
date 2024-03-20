import { memo, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

const List = ({ value, onItemChange }) => {
    const addValue = useCallback(
        (index) => {
            const newData = [...value];
            newData[index] = '!!!' + newData[index];
            onItemChange(newData);
        },
        [onItemChange, value],
    );

    let finalItems = useMemo(() => {
        return value.map((item, index) => (
            <li key={uuidv4()}>
                <button onClick={() => addValue(index)}>Add !!!</button>
                {item}
            </li>
        ));
    }, [addValue, value]);

    return <ul>{finalItems}</ul>;
};

export default memo(List);
