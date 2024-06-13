import React, { useState } from 'react';

function Admin(props) {
    const [year, setYear] = useState();
    const [exam, setExam] = useState();
    const [paper, setPaper] = useState();
    const [medium, setMedium] = useState();
    const [type, setType] = useState();
    const [file, setFile] = useState(null);
    const reader = new FileReader();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!file) {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('Year', year);
        formData.append('Exam', exam);
        formData.append('Paper', paper);
        formData.append('Medium', medium);
        formData.append('Type', type);
        formData.append('File', file);
        console.log(file);
        const response = await fetch(`https://localhost:7165/api/Papers/upload?exam=${exam}&year=${year}&paperNo=${paper}&medium=${medium}&type=${type}`, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Data submitted successfully');
        } else {
            alert('Failed to submit data');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select className="form-select form-select-md mb-3" aria-label="Large select example" value={year} onChange={(e) => setYear(e.target.value)}>
                    <option value="" disabled>Select Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>

                <select className="form-select form-select-md mb-3" aria-label="Large select example" value={exam} onChange={(e) => setExam(e.target.value)}>
                    <option value="" disabled>Select Exam</option>
                    <option value="IIT JEE">IIT JEE</option>
                    <option value="JEE MAIN">JEE MAIN</option>
                    <option value="NEET">NEET</option>
                </select>

                <select className="form-select form-select-md mb-3" aria-label="Large select example" value={paper} onChange={(e) => setPaper(e.target.value)}>
                    <option value="" disabled>Select Paper</option>
                    <option value="1">Paper-1</option>
                    <option value="2">Paper-2</option>
                </select>

                <select className="form-select form-select-md mb-3" aria-label="Large select example" value={medium} onChange={(e) => setMedium(e.target.value)}>
                    <option value="" disabled>Select Medium</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>

                <select className="form-select form-select-md mb-3" aria-label="Large select example" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="" disabled>Select Type</option>
                    <option value="Question">Question</option>
                    <option value="Solution">Solution</option>
                </select>

                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" onChange={(e) => setFile(e.target.files[0])} />
                </div>

                <div className="btn-group" role="group" aria-label="Basic mixed styles example" style={{ width: '100%' }}>
                    <button type="submit" className="btn btn-success">SUBMIT</button>
                    <button type="button" className="btn btn-danger" onClick={() => {
                        setYear('');
                        setExam('');
                        setPaper('');
                        setMedium('');
                        setType('');
                        setFile(null);
                    }}>CANCEL</button>
                </div>
            </form>
        </div>
    );
}

export default Admin;
