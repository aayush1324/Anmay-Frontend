import React, { useState, useRef } from 'react';
import SideNav from './SideNav';
import './Conversion.css'
import LengthCalculator from './LengthCalculator';

function Conversion(props) {
    const [currentCalculator, setCurrentCalculator] = useState('length');

    return (
        <div className="containerbox">
            <SideNav setCalculator={setCurrentCalculator} />

            <div className="calculator">
                {currentCalculator === 'length' && <LengthCalculator />}
                {/* {currentCalculator === 'mToKm' && <MToKmCalculator />} */}
            </div>
        </div>
    );
}

export default Conversion;