import React, { useState, useEffect } from 'react';

const HookCounter2 = () => {

    const [ count, setCount ] = useState(0);
    const [ name, setName ] = useState('');

    useEffect(() => {
        console.log('UseEffect - Updating document title');
        document.title = `Clicked ${count} times`;
    }, [count])

    return (
        <>
            <input type="text" value={name} onChange={event => setName(event.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </>
    );
};

export default HookCounter2;
