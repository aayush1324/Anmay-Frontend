import React from 'react';

function SideNav({ setCalculator }) {
    return (
        <div className="sidenav">
            <div class="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100">
                
                <h1>Conversion Calculator</h1>
                <br />
                <br />
                <ul class="nav " id="menu">
                    <li onClick={() => setCalculator('length')}><h4>Length Conversion</h4></li>
                    <br />
                    <br />
                    <li onClick={() => setCalculator('weight')}><h4>Weight Conversion</h4></li>
                    <br />
                    <br />
                    <li onClick={() => setCalculator('temperature')}><h4>Temperature Conversion</h4></li>
                    <br />
                    <br />
                    <li onClick={() => setCalculator('volume')}><h4>Volume Conversion</h4></li>                      
                    <br />
                    <br />
                </ul>
            </div>
        </div>
    );
}
export default SideNav;