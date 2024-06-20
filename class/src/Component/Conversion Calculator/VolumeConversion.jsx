import React, { useState, useEffect } from 'react';

function VolumeConversion(props) {
    const [inputValue, setInputValue] = useState(0);
    const [fromUnit, setFromUnit] = useState("cm");
    const [toUnit, setToUnit] = useState("inch");
    const [result, setResult] = useState(0);
    const [conversionFactor, setConversionFactor] = useState(0);

    const conversionFactors = {
        cm: {
            inch: 1 / 2.54,
            feet: 1 / 30.48,
            meter: 1 / 100,
            yard: 1 / 91.44,
            mile: 1 / 160934.4,
            kilometer: 1 / 100000,
            micrometer: 1e4,
            nanometer: 1e7,
            millimeter: 10,
            nauticalMile: 1 / 1852,
            exameter: 1e-17,
            petameter: 1e-14,
            terameter: 1e-11,
        },
        inch: {
            cm: 2.54,
            feet: 1 / 12,
            meter: 0.0254,
            yard: 1 / 36,
            mile: 1 / 63360,
            kilometer: 0.0000254,
            micrometer: 25400,
            nanometer: 25400000,
            millimeter: 25.4,
            nauticalMile: 1 / 72913.4,
            exameter: 1e-16,
            petameter: 1e-13,
            terameter: 1e-10,
        },
        feet: {
            cm: 30.48,
            inch: 12,
            meter: 0.3048,
            yard: 1 / 3,
            mile: 1 / 5280,
            kilometer: 0.0003048,
            micrometer: 304800,
            nanometer: 304800000,
            millimeter: 304.8,
            nauticalMile: 1 / 6076.12,
            exameter: 1e-15,
            petameter: 1e-12,
            terameter: 1e-9,
        },
        meter: {
            cm: 100,
            inch: 39.3701,
            feet: 3.28084,
            yard: 1.09361,
            mile: 1 / 1609.34,
            kilometer: 0.001,
            micrometer: 1e6,
            nanometer: 1e9,
            millimeter: 1000,
            nauticalMile: 1 / 1852,
            exameter: 1e-18,
            petameter: 1e-15,
            terameter: 1e-12,
        },
        yard: {
            cm: 91.44,
            inch: 36,
            feet: 3,
            meter: 0.9144,
            mile: 1 / 1760,
            kilometer: 0.0009144,
            micrometer: 914400,
            nanometer: 914400000,
            millimeter: 914.4,
            nauticalMile: 1 / 2025.37,
            exameter: 1e-17,
            petameter: 1e-14,
            terameter: 1e-11,
        },
        mile: {
            cm: 160934.4,
            inch: 63360,
            feet: 5280,
            meter: 1609.34,
            yard: 1760,
            kilometer: 1.60934,
            micrometer: 1.60934e9,
            nanometer: 1.60934e12,
            millimeter: 1.60934e6,
            nauticalMile: 1 / 1.15078,
            exameter: 1e-15,
            petameter: 1e-12,
            terameter: 1e-9,
        },
        kilometer: {
            cm: 1e5,
            inch: 39370.1,
            feet: 3280.84,
            meter: 1000,
            yard: 1093.61,
            mile: 0.621371,
            micrometer: 1e9,
            nanometer: 1e12,
            millimeter: 1e6,
            nauticalMile: 0.539957,
            exameter: 1e-16,
            petameter: 1e-13,
            terameter: 1e-10,
        },
        micrometer: {
            cm: 1e-4,
            inch: 3.937e-5,
            feet: 3.2808e-6,
            meter: 1e-6,
            yard: 1.0936e-6,
            mile: 6.2137e-10,
            kilometer: 1e-9,
            nanometer: 1000,
            millimeter: 0.001,
            nauticalMile: 5.3996e-10,
            exameter: 1e-23,
            petameter: 1e-20,
            terameter: 1e-17,
        },
        nanometer: {
            cm: 1e-7,
            inch: 3.937e-8,
            feet: 3.2808e-9,
            meter: 1e-9,
            yard: 1.0936e-9,
            mile: 6.2137e-13,
            kilometer: 1e-12,
            micrometer: 1e-6,
            millimeter: 1e-6,
            nauticalMile: 5.3996e-13,
            exameter: 1e-26,
            petameter: 1e-23,
            terameter: 1e-20,
        },
        millimeter: {
            cm: 0.1,
            inch: 0.03937,
            feet: 0.003281,
            meter: 0.001,
            yard: 0.0010936,
            mile: 6.2137e-7,
            kilometer: 1e-6,
            micrometer: 1000,
            nanometer: 1e6,
            nauticalMile: 5.3996e-7,
            exameter: 1e-20,
            petameter: 1e-17,
            terameter: 1e-14,
        },
        nauticalMile: {
            cm: 185200,
            inch: 72913.4,
            feet: 6076.12,
            meter: 1852,
            yard: 2025.37,
            mile: 1.15078,
            kilometer: 1.852,
            micrometer: 1.852e8,
            nanometer: 1.852e11,
            millimeter: 1.852e5,
            exameter: 5.3996e-17,
            petameter: 5.3996e-14,
            terameter: 5.3996e-11,
        },
        exameter: {
            cm: 1e17,
            inch: 3.937e16,
            feet: 3.2808e16,
            meter: 1e16,
            yard: 1.0936e16,
            mile: 6.2137e12,
            kilometer: 1e15,
            micrometer: 1e23,
            nanometer: 1e26,
            millimeter: 1e20,
            nauticalMile: 5.3996e17,
            petameter: 1e3,
            terameter: 1e6,
        },
        petameter: {
            cm: 1e14,
            inch: 3.937e13,
            feet: 3.2808e13,
            meter: 1e13,
            yard: 1.0936e13,
            mile: 6.2137e9,
            kilometer: 1e12,
            micrometer: 1e20,
            nanometer: 1e23,
            millimeter: 1e17,
            nauticalMile: 5.3996e14,
            exameter: 1e-3,
            terameter: 1e3,
        },
        terameter: {
            cm: 1e11,
            inch: 3.937e10,
            feet: 3.2808e10,
            meter: 1e10,
            yard: 1.0936e10,
            mile: 6.2137e6,
            kilometer: 1e9,
            micrometer: 1e17,
            nanometer: 1e20,
            millimeter: 1e14,
            nauticalMile: 5.3996e11,
            exameter: 1e-6,
            petameter: 1e-3,
        },
    };

    const convert = (value, from, to) => {
        return value * conversionFactors[from][to];
    };

    const roundToDecimalPlaces = (number, decimalPlaces) => {
        const factor = Math.pow(10, decimalPlaces);
        return Math.round(number * factor) / factor;
    };

    useEffect(() => {
        const convertedValue = convert(inputValue, fromUnit, toUnit);
        setResult(roundToDecimalPlaces(convertedValue, 10));
        setConversionFactor(roundToDecimalPlaces(conversionFactors[fromUnit][toUnit], 5));
    }, [inputValue, fromUnit, toUnit]);

    const handleInputChange = (e) => {
        setInputValue(parseFloat(e.target.value));
    };

    const handleOutputChange = (e) => {
        const newResult = parseFloat(e.target.value);
        setResult(newResult);
        const convertedBackValue = convert(newResult, toUnit, fromUnit);
        setInputValue(roundToDecimalPlaces(convertedBackValue, 10));
    };
    

    return (
        <div className="container">
            <h1>Volume Conversion</h1>
            <br />
            <br />

            <div className="input">
                <h3>Input Number</h3>
                <br />
                <input type="number" value={inputValue === 0 ? '' : inputValue} onChange={handleInputChange} placeholder="Enter value" className="input-field"/>

                {Object.keys(conversionFactors).length > 1 && ( // Check if there are multiple units
                    <select className="unit-selectors" value={fromUnit} onChange={(e) => {
                            const selectedFromUnit = e.target.value;
                            setFromUnit(selectedFromUnit);
                            if (selectedFromUnit === toUnit) {
                                const availableUnits = Object.keys(conversionFactors[selectedFromUnit])
                                    .filter(unit => unit !== selectedFromUnit);
                                setToUnit(availableUnits[0]);
                            }
                        }}>

                        {Object.keys(conversionFactors).map((unit) => (
                            <option key={unit} value={unit} disabled={unit === toUnit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <br />
            <br />
            <br />
            
            <div className="output">
                <h3>Output Number</h3>
                <br />

                <input type="number" value={result === 0 ? '' : result} onChange={handleOutputChange} className="input-field" placeholder='Enter Value'/>
          
                {Object.keys(conversionFactors).length > 1 && ( // Check if there are multiple units
                    <select className="unit-selectors" value={toUnit} onChange={(e) => {
                            const selectedToUnit = e.target.value;
                            setToUnit(selectedToUnit);
                            if (selectedToUnit === fromUnit) {
                                const availableUnits = Object.keys(conversionFactors[selectedToUnit])
                                    .filter(unit => unit !== selectedToUnit);
                                setFromUnit(availableUnits[0]);
                            }
                        }}>

                        {Object.keys(conversionFactors).map((unit) => (
                            <option key={unit} value={unit} disabled={unit === fromUnit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <br />
            <br />
            <br />

            <div className="conversion">
                <h3>Conversion</h3>
                <br />
                <h6>1 {fromUnit} = {conversionFactor} {toUnit}</h6>
            </div>
        </div>
    );
}


export default VolumeConversion;