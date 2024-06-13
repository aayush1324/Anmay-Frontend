import React from 'react';

function TableJEE(props) {
    return (
        <div>
            <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Year</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col" rowspan="2">Year</th>
                <th scope="col" rowspan="2">Language</th>
                <th scope="col" colspan="2">Paper-1</th>
                <th scope="col" colspan="2">Paper-2</th>
                </tr>
                <tr>
                <th scope="col">Question</th>
                <th scope="col">Solution</th>
                <th scope="col">Question</th>
                <th scope="col">Solution</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                    <th scope="row" rowSpan="2">1</th>
                    <td>English</td>
                    <td>Download</td>
                    <td>Download</td>
                    <td>Download</td>
                    <td>Download</td>                    
                    </tr>
                    <tr>
                    <td>Hindi</td>
                    <td>Download</td>
                    <td>Download</td>
                    <td>Download</td>
                    <td>Download</td>                    
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableJEE;