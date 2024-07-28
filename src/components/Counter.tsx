import React, { useState } from 'react';
import * as css from './CounterStyle.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count => count + 1);
    }

    return (
        <div className={css.test}>
            {count}
            <button onClick={handleCount}>click me </button>
        </div>
    );
};

export default Counter;
