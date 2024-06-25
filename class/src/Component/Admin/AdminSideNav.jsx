import React from 'react';

function AdminSideNav({ setUpload }) {
    return (
        <div className="sidenav">
            <div class="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100">
                
                <h1>Upload Document</h1>
                <br />
                <br />
                <ul class="nav " id="menu">
                    <li onClick={() => setUpload('quiz')}><h4>Quiz Upload</h4></li>
                    <br />
                    <br />
                    <li onClick={() => setUpload('competitive')}><h4>Competitive Paper</h4></li>
                    <br />
                    <br />
                    <li onClick={() => setUpload('ncert')}><h4>NCERT Solution</h4></li>
                    <br />
                </ul>
            </div>
        </div>
    );
}

export default AdminSideNav;