import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Class11(props) {
    const [groupedSolutions, setGroupedSolutions] = useState({});

    useEffect(() => {
        const fetchSolutions = async () => {
            try {
                const response = await axios.get('https://localhost:7165/api/NCERT/getAllSolutions');
                console.log('All Solutions:', response.data);

                // Filter solutions for Class 11
                const class11Solutions = response.data.filter(solution => solution.standard === 11);
                console.log('Class 11 Solutions:', class11Solutions);

                // Group by subject and sort chapters
                const grouped = class11Solutions.reduce((acc, solution) => {
                    if (!acc[solution.subject]) {
                        acc[solution.subject] = [];
                    }
                    acc[solution.subject].push(solution);
                    return acc;
                }, {});

                // Sort chapters within each subject
                Object.keys(grouped).forEach(subject => {
                    grouped[subject].sort((a, b) => a.chapter - b.chapter);
                });

                // Set the grouped solutions to state
                setGroupedSolutions(grouped);
            } catch (error) {
                console.error('Fetch Solutions Error:', error);
                alert('Failed to fetch solutions');
            }
        };

        fetchSolutions();
    }, []);

    const generateDownloadLink = (standard, subject, chapter, language, type) => {
        return `https://localhost:7165/api/NCERT/download?standard=${standard}&subject=${subject}&chapter=${chapter}&language=${language}&type=${type}`;
    };

    const generateViewLink = (standard, subject, chapter, language, type) => {
        return `https://localhost:7165/api/NCERT/view?standard=${standard}&subject=${subject}&chapter=${chapter}&language=${language}&type=${type}`;
    };

    const renderLinks = (solution) => {
        if (solution) {
            return (
                <>
                    <a href={generateDownloadLink(solution.standard, solution.subject, solution.chapter, solution.language, solution.type)} target="_blank" rel="noopener noreferrer">Download</a>
                    <a href={generateViewLink(solution.standard, solution.subject, solution.chapter, solution.language, solution.type)} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>View</a>
                </>
            );
        }
        return null;
    };

    return (
        <div>
            <h1>Class 11</h1>
            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Subject</th>
                        <th scope="col">Chapter No.</th>
                        <th scope="col">Chapter Name</th>
                        <th scope="col">Questions</th>
                        <th scope="col">Solutions</th>
                        <th scope="col">Complete Solution</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(groupedSolutions).sort().map((subject, subjectIndex) => (
                        groupedSolutions[subject].map((solution, chapterIndex) => (
                            <tr key={`${subject}-${chapterIndex}`}>
                                {chapterIndex === 0 && (
                                    <td rowSpan={groupedSolutions[subject].length}>{subject}</td>
                                )}
                                <td>{solution.chapter}</td>
                                <td>{solution.chapter_Name}</td>
                                <td>{renderLinks(solution, 'Question')}</td>
                                <td>{renderLinks(solution, 'Solution')}</td>
                                <td>{renderLinks(solution, 'Complete Solution')}</td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Class11;