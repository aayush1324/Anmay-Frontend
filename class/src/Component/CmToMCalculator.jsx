// src/components/CmToMCalculator.js
import React, { useState } from 'react';

function CmToMCalculator() {
    const [cm, setCm] = useState('');
    const [m, setM] = useState('');

    const handleConvert = () => {
        setM(cm / 100);
    };

    return (
        <div>
            <h2>Convert cm to m</h2>
            <input
                type="number"
                value={cm}
                onChange={(e) => setCm(e.target.value)}
                placeholder="Enter cm"
            />
            <button onClick={handleConvert}>Convert</button>
            {m && <p>{cm} cm is {m} m</p>}
        </div>
    );
}

export default CmToMCalculator;
