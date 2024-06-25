import React, { useState, useRef } from 'react';

function CompetitivePaper(props) {

    const [year, setYear] = useState('');
    const [exam, setExam] = useState('');
    const [paper, setPaper] = useState('');
    const [language, setLanguage] = useState('');
    const [type, setType] = useState('');
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);


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
        formData.append('Language', language);
        formData.append('Type', type);
        formData.append('File', file);

        console.log(formData);
        
        try {
            const response = await fetch('https://localhost:7165/api/Paper/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Data submitted successfully');
                // Reset the form
                setYear('');
                setExam('');
                setPaper('');
                setLanguage('');
                setType('');
                setFile(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = ''; // Clear the file input
                }
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                alert('Failed to submit data');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit data');
        }
    };

    return (
        <div>
            <h1>Paper</h1>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <select className="form-select form-select-md mb-3" value={year} onChange={(e) => setYear(e.target.value)}>
                    <option value="" disabled>Select Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>

                <select className="form-select form-select-md mb-3" value={exam} onChange={(e) => setExam(e.target.value)}>
                    <option value="" disabled>Select Exam</option>
                    <option value="IIT JEE">IIT JEE</option>
                    <option value="JEE MAIN">JEE MAIN</option>
                    <option value="NEET">NEET</option>
                </select>

                <select className="form-select form-select-md mb-3" value={paper} onChange={(e) => setPaper(e.target.value)}>
                    <option value="" disabled>Select Paper</option>
                    <option value="1">Paper-1</option>
                    <option value="2">Paper-2</option>
                </select>

                <select className="form-select form-select-md mb-3" value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="" disabled>Select Language</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>

                <select className="form-select form-select-md mb-3" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="" disabled>Select Type</option>
                    <option value="Question">Question</option>
                    <option value="Solution">Solution</option>
                </select>

                <div className="input-group mb-3">
                    <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} ref={fileInputRef} />
                </div>

                <div className="btn-group" role="group" style={{ width: '100%' }}>
                    <button type="submit" className="btn btn-success">SUBMIT</button>
                    <button type="button" className="btn btn-danger" onClick={() => {
                        setYear('');
                        setExam('');
                        setPaper('');
                        setLanguage('');
                        setType('');
                        setFile(null);
                        if (fileInputRef.current) {
                            fileInputRef.current.value = ''; // Clear the file input
                        }
                    }}>CANCEL</button>
                </div>
            </form>
        </div>
    );
}

export default CompetitivePaper;