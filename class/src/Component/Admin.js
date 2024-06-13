import React from 'react';

function Admin(props) {
    return (
        <div>
            <select class="form-select form-select-md mb-3" aria-label="Large select example">
                <option selected>Select Year</option>
                <option value="1">2024</option>
                <option value="2">2023</option>
                <option value="3">2022</option>
            </select>

            <select class="form-select form-select-md mb-3" aria-label="Large select example">
                <option selected>Select Exam</option>
                <option value="1">IIT JEE</option>
                <option value="2">JEE MAIN</option>
                <option value="3">NEET</option>
            </select>

            <select class="form-select form-select-md mb-3" aria-label="Large select example">
                <option selected>Select Paper</option>
                <option value="1">Paper-1</option>
                <option value="2">Paper-2</option>
            </select>

            <select class="form-select form-select-md mb-3" aria-label="Large select example">
                <option selected>Select Medium</option>
                <option value="1">English</option>
                <option value="2">Hindi</option>
            </select>

            <select class="form-select form-select-md mb-3" aria-label="Large select example">
                <option selected>Select Type</option>
                <option value="1">Question</option>
                <option value="2">Solution</option>
            </select>

            <div class="btn-group" role="group" aria-label="Basic mixed styles example" style={{ width: '100%' }}>
                <button type="button" class="btn btn-danger">SUBMIT</button>
                <br />
                <button type="button" class="btn btn-success">CANCEL</button>
            </div>
        </div>
    );
}

export default Admin;