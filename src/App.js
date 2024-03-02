import React, { useEffect } from 'react';

import './App.css';

const LifecycleComponent = () => {
    const [count, setCount] = React.useState(0);
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFubmFhbmVjaGthMTExOTk5QGdtYWlsLmNvbSIsImlkIjoyODgsImlhdCI6MTcwOTM4MDI4OH0._kfiGuflpDTzJYNLPxZGp8aDC6J_Bu8hGXXuLulKYMM';

    const raiseCount = () => {
        setCount((count) => count + 1);
    };

    const getList = async (param) => {
        try {
            if (param === true) {
                let response = await fetch(
                    'https://todo-redev.herokuapp.com/api/todos?isCompleted=true',
                    {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                let data = await response.json();
                console.log(data);
            } else if (param === false) {
                let response = await fetch(
                    'https://todo-redev.herokuapp.com/api/todos?isCompleted=false',
                    {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                let data = await response.json();
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getList(false);
        return () => {
            console.log('Unmount');
        };
    }, []);

    useEffect(() => {
        console.log(`Значение изменено: ${count}`);
    }, [count]);

    return (
        <div>
            {count % 2 === 0 ? <p>Счет: {count}</p> : <p>Счет: {count - 1}</p>}
            <button onClick={raiseCount}>Увеличить</button>
        </div>
    );
};

export default LifecycleComponent;
