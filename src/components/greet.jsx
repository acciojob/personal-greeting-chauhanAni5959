import React, { useState } from 'react';

function Greet() {
    const [name, setName] = useState('');

    return (
        <div>
            <h2>Enter your name:</h2>
            <input
                type="text"
                placeholder="Type your name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            
            {name.trim() !== '' && <p>Hello, {name}!</p>}
        </div>
    );
}

export default Greet;