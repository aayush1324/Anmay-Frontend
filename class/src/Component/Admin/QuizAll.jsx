import React, { useState, useRef } from 'react';

function QuizAll(props) {

    const [year, setYear] = useState('');
    const [exam, setExam] = useState('');
    const [paper, setPaper] = useState('');
    const [language, setLanguage] = useState('');
    const [type, setType] = useState('');
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const [standard, setStandard] = useState('');
    const [subject, setSubject] = useState('');
    const [chapter, setChapter] = useState('');
    const [text, setChapterName] = useState('');
    const [questionTotal, setQuestionTotal] = useState('');
    const [questions, setQuestions] = useState([]);
    const [quizID, setQuizID] = useState(null); // State to store QuizID

    const QuizSubmit = async (e) => {
        e.preventDefault();

        setQuestions(Array.from({ length: parseInt(questionTotal) }, (_, i) => ({ id: i + 1, question: '', answer: '', options: ['', '', '', ''] })));

        const formData = new FormData();
            formData.append('Standard', standard);
            formData.append('Subject', subject);
            formData.append('Chapter', chapter);
            formData.append('Language', language);
            formData.append('QuestionTotal', questionTotal);
    
        try {
            const response = await fetch('https://localhost:7165/api/Quiz/upload', {
                method: 'POST',
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error('Failed to submit quiz data');
            }
        
            console.log('Quiz data submitted successfully');
            const data = await response.json(); // or response.text() if the response is plain text

            console.log(data);
            console.log(data.quizID);

            setQuizID(data.quizID); // Store QuizID in state
    
            // Reset form fields if needed
            setStandard('');
            setSubject('');
            setChapter('');
            setLanguage('');
            setQuestionTotal('');
    
        } catch (error) {
            console.error('Error submitting quiz data:', error);
            // Handle error as needed
        }
    };
    
    const QuizFormSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            QuizId: quizID, // Use state variable holding QuizID
            questions: questions.map(q => ({
                questionNumber: q.id,
                question: q.question,
                answer: q.answer,
                option1: q.options[0],
                option2: q.options[1],
                option3: q.options[2],
                option4: q.options[3],
            }))
        };

        console.log(formData);

        try {
            const url = `https://localhost:7165/api/QuizForm/quizUpload?quizID=${quizID}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit quiz form');
            }
        
            console.log('Quiz Form submitted successfully');
            const data = await response.json(); // or response.text() if the response is plain text

            console.log(data);
    
        } catch (error) {
            console.error('Error submitting quiz data:', error);
            // Handle error as needed
        }
    };  

    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = questions.map((q, i) => i === index ? { ...q, [field]: value } : q);
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (qIndex, oIndex, value) => {
        const updatedQuestions = questions.map((q, i) => {
            if (i === qIndex) {
                const updatedOptions = q.options.map((o, j) => j === oIndex ? value : o);
                return { ...q, options: updatedOptions };
            }
            return q;
        });
        setQuestions(updatedQuestions);
    };

    const isFormComplete = () => {
        return standard && subject && chapter && language && questionTotal;
    };

    const isQuestionsFormComplete = () => {
        return questions.every(q => q.question && q.answer && q.options.every(option => option));
    };
    

    return (
        <div>
            <h1>Quiz</h1>

            <form onSubmit={QuizSubmit} encType="multipart/form-data">
                <select className="form-select form-select-md mb-3" value={standard} onChange={(e) => setStandard(e.target.value)}>
                    <option value="" selected>Select Class</option>
                    <option value="12">12</option>
                    <option value="11">11</option>
                    <option value="10">10</option>
                    <option value="9"> 9</option>
                    <option value="8"> 8</option>
                    <option value="7"> 7</option>
                    <option value="6"> 6</option>
                    <option value="5"> 5</option>
                    <option value="4"> 4</option>
                    <option value="3"> 3</option>
                    <option value="2">2</option>
                    <option value="1"> 1</option>
                </select>

                <select className="form-select form-select-md mb-3" value={subject} onChange={(e) => setSubject(e.target.value)}>
                    <option value="" selected>Select Subject</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Math">Math</option>
                    <option value="Zoology">Zoology</option>
                    <option value="Botany">Zoology</option>
                </select>

                <select className="form-select form-select-md mb-3" value={chapter} onChange={(e) => setChapter(e.target.value)}>
                    <option value="" selected>Select Chapter</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

                <select className="form-select form-select-md mb-3" value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="" selected>Select Language</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>

                <select className="form-select form-select-md mb-3" value={questionTotal} onChange={(e) => setQuestionTotal(e.target.value)}>
                    <option value="" selected>Select Total Question</option>
                    <option value="1"> 1</option>
                    <option value="20">20</option>
                    <option value="3">3</option>
                    <option value="20">20</option>
                </select>

                <div className="btn-group" role="group" style={{ width: '100%' }}>
                    <button type="submit" className="btn btn-success" disabled={!isFormComplete()}>SUBMIT</button>
                    <button type="button" className="btn btn-danger" onClick={() => {
                        setStandard('');
                        setSubject('');
                        setChapter('');
                        setLanguage('');
                        setQuestionTotal('');
                    }}>CANCEL</button>
                </div>
            </form>

            {questions.length > 0 && (
                <form onSubmit={QuizFormSubmit} encType="multipart/form-data">
                    {questions.map((q, index) => (
                        <div key={q.id}>
                            <br />
                            <br />
                            <br />
                            <h6>Question Number {q.id}</h6>
                            <br />
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder='Enter Question' value={q.question} onChange={(e) => handleQuestionChange(index, 'question', e.target.value)} />
                            </div>

                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder='Enter Answer' value={q.answer} onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)} />
                            </div>

                            {q.options.map((option, oIndex) => (
                                <div className="input-group mb-3" key={oIndex}>
                                    <input type="text" className="form-control" placeholder={`Enter Option ${oIndex + 1}`} value={option} onChange={(e) => handleOptionChange(index, oIndex, e.target.value)} />
                                </div>
                            ))}
                        </div>
                    ))}
                    <br />
                    <div className="btn-group" role="group" style={{ width: '100%' }}>
                        <button type="submit" className="btn btn-success" disabled={!isQuestionsFormComplete()}>UPLOAD</button>
                        <button type="button" className="btn btn-danger" onClick={() => setQuestions([])}>CANCEL</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default QuizAll;