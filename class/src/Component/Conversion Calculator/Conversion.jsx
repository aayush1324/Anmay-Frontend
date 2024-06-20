import React, { useState, useRef } from 'react';
import SideNav from './SideNav';
import './Conversion.css'
import LengthConversion from './LengthConversion';
import WeightConversion from './WeightConversion';
import VolumeConversion from './VolumeConversion';
import TemperatureConversion from './TemperatureConversion';

function Conversion(props) {
    const [currentCalculator, setCurrentCalculator] = useState('length');

    return (
        <div className="containerbox">
            <SideNav setCalculator={setCurrentCalculator} />

            <div className="calculator">
                {currentCalculator === 'length' && <LengthConversion />}
                {currentCalculator === 'weight' && <WeightConversion />}
                {currentCalculator === 'volume' && <VolumeConversion />}
                {currentCalculator === 'temperature' && <TemperatureConversion />}
            </div>
        </div>
    );
}

export default Conversion;