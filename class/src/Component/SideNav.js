// src/components/SideNav.js
import React from 'react';

function SideNav({ setCalculator }) {
    return (
        <div className="sidenav">
            <ul>
                <li onClick={() => setCalculator('cmToM')}>cm to m</li>
                <li onClick={() => setCalculator('mToKm')}>m to km</li>
            </ul>


            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 ">
                        <div class="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100">
                            
                            <h3>Conversion Calculator</h3>

                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                         <span class="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#" class="nav-link px-0 align-middle">
                                         <span class="ms-1 d-none d-sm-inline">Orders</span></a>
                                </li>
                                
                                <li>
                                    <a href="#" class="nav-link px-0 align-middle">
                                        <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
