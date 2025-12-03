import React, { useState } from 'react';

function Greet() {
    const [name, setName] = useState('');

    // Use trimmed value for display and checks so leading/trailing spaces are ignored
    const trimmed = name.trim();

    return (
        <div>
            <h2>Enter your name:</h2>

            <label htmlFor="nameInput">Name</label>
            <input
                id="nameInput"
                name="name"
                type="text"
                placeholder="Type your name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                aria-label="Name input"
            />

           
            {trimmed !== '' && (
                <div>
                    <p aria-live="polite">Hello, {trimmed}!</p>
                    <button type="button" onClick={() => setName('')}>Clear</button>
                </div>
            )}
        </div>
    );
}

export default Greet;