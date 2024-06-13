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

            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Language</th>
                    <th scope="col" colspan="2" rowspan="2">Paper-1</th>
                    <th scope="col" colspan="2" rowSpan="2">Paper-2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row" rowSpan="2">1</th>
                    <td>English</td>
                    <td>Question Paper</td>
                    <td>Solution</td>
                    <td>Question Paper</td>
                    <td>Solution</td>                    
                    </tr>
                    <tr>
                    <td>Hindi</td>
                    <td>Question Paper</td>
                    <td>Solution</td>
                    <td>Question Paper</td>
                    <td>Solution</td>                    
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableJEE;