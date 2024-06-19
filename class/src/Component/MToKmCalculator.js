// src/components/MToKmCalculator.js
import React, { useState } from 'react';

function MToKmCalculator() {
    const [m, setM] = useState('');
    const [km, setKm] = useState('');

    const handleConvert = () => {
        setKm(m / 1000);
    };

    return (
        <div>
            <h1>Convert m to km</h1>
            <input type="number" value={m} onChange={(e) => setM(e.target.value)} placeholder="Enter meters" />
            <br />
            <button onClick={handleConvert}>Convert</button>
            <br />
            {km && <h6>{m} m is {km} km</h6>}
        </div>
    );
}

export default MToKmCalculator;
