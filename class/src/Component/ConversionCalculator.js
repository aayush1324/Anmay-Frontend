import React, { useState, useRef } from 'react';
import CmToMCalculator from './CmToMCalculator';
import MToKmCalculator from './MToKmCalculator';
import SideNav from './SideNav';
import './Conversion.css';

function ConversionCalculator(props) {
    const [currentCalculator, setCurrentCalculator] = useState('cmToM');

    return (
        <div className="containerbox">
            <SideNav setCalculator={setCurrentCalculator} />

            <div className="calculator">
                {currentCalculator === 'cmToM' && <CmToMCalculator />}
                {currentCalculator === 'mToKm' && <MToKmCalculator />}
            </div>
        </div>
    );
}

export default ConversionCalculator;