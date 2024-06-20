import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PreviousPaper({ examType }) {
    const [groupedPapers, setGroupedPapers] = useState({});

    useEffect(() => {
        const fetchPapers = async () => {
            try {
                const response = await axios.get('https://localhost:7165/api/Paper/getAllPapers');
                console.log('All Papers:', response.data);

                // Filter papers based on the examType prop
                const filteredPapers = response.data.filter(paper => paper.exam === examType);
                console.log(`${examType} Papers:`, filteredPapers);
 
                // Group papers by year
                const grouped = filteredPapers.reduce((acc, paper) => {
                    if (!acc[paper.year]) {
                        acc[paper.year] = {
                            English: { 1: {}, 2: {} },
                            Hindi: { 1: {}, 2: {} }
                        };
                    }
                    acc[paper.year][paper.medium][paper.paperNo][paper.type] = paper;
                    return acc;
                }, {});

                console.log('Grouped Papers:', grouped);

                // Sort years in descending order
                const sortedYears = Object.keys(grouped).sort((a, b) => b - a);
                const sortedGroupedPapers = sortedYears.reduce((acc, year) => {
                    acc[year] = grouped[year];
                    return acc;
                }, {});

                console.log(sortedGroupedPapers);
                
                // Set the grouped papers to state
                setGroupedPapers(sortedGroupedPapers);
            } catch (error) {
                console.error('Fetch Papers Error:', error);
                alert('Failed to fetch papers');
            }
        };

        fetchPapers();
    }, [examType]); // Re-run effect if examType changes

    const generateDownloadLink = (exam, year, medium, paperNo, paperType) => {
        return `https://localhost:7165/api/Paper/download?exam=${exam}&year=${year}&medium=${medium}&paperNo=${paperNo}&paperType=${paperType}`;
    };

    const generateViewLink = (exam, year, medium, paperNo, paperType) => {
        return `https://localhost:7165/api/Paper/view?exam=${exam}&year=${year}&medium=${medium}&paperNo=${paperNo}&paperType=${paperType}`;
    };

    const renderLinks = (paper) => {
        if (paper) {
            return (
                <>
                    <a href={generateDownloadLink(paper.exam, paper.year, paper.medium, paper.paperNo, paper.type)} target="_blank" rel="noopener noreferrer">Download</a>
                    <a href={generateViewLink(paper.exam, paper.year, paper.medium, paper.paperNo, paper.type)} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>View</a>
                </>
            );
        }
        return null;
    };

    return (
        <div>
            <h2>{examType} Papers</h2>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" rowSpan="2"><h4>Year</h4></th>
                        <th scope="col" rowSpan="2"><h4>Language</h4></th>
                        <th scope="col" colSpan="2">Paper-1</th>
                        <th scope="col" colSpan="2">Paper-2</th>
                    </tr>
                    <tr>
                        <th scope="col">Question</th>
                        <th scope="col">Solution</th>
                        <th scope="col">Question</th>
                        <th scope="col">Solution</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(groupedPapers).reverse().map(year => (
                        <React.Fragment key={year}>
                            <tr>
                                <th scope="row" rowSpan="2"><h4>{year}</h4></th>
                                <td><b>English</b></td>
                                <td>{renderLinks(groupedPapers[year]['English'][1]['Question'])}</td>
                                <td>{renderLinks(groupedPapers[year]['English'][1]['Solution'])}</td>
                                <td>{renderLinks(groupedPapers[year]['English'][2]['Question'])}</td>
                                <td>{renderLinks(groupedPapers[year]['English'][2]['Solution'])}</td>
                            </tr>
                            <tr>
                                <td><b>Hindi</b></td>
                                <td>{renderLinks(groupedPapers[year]['Hindi'][1]['Question'])}</td>
                                <td>{renderLinks(groupedPapers[year]['Hindi'][1]['Solution'])}</td>
                                <td>{renderLinks(groupedPapers[year]['Hindi'][2]['Question'])}</td>
                                <td>{renderLinks(groupedPapers[year]['Hindi'][2]['Solution'])}</td>
                            </tr>
                            <br />
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PreviousPaper;