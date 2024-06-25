import React, { useState } from 'react';

function Quizzes(props) {
  const [standard, setStandard] = useState('');
  const [subject, setSubject] = useState('');
  const [chapter, setChapter] = useState('');
  const [language, setLanguage] = useState('');
  const [quizID, setQuizID] = useState('');
  const [result, setResult] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      standard: standard,
      subject: subject,
      chapter: chapter,
      language: language
    });

    try {
      const response = await fetch(`https://localhost:7165/api/Quiz/getQuizId?${queryParams}`);
      const data = await response.json();

      if (response.ok) {
        setQuizID(data.quizID);
        setResult(`Quiz ID: ${data.quizID}`);
        fetchQuestions(data.quizID);
        console.log(data);
      } else {
        setResult(`Error: ${data.Message}`);
      }
    } catch (error) {
      console.error('Error fetching quiz ID:', error);
      setResult('An error occurred while fetching the quiz ID.');
    }
  };

  const fetchQuestions = async (quizID) => {
    try {
      const response = await fetch(`https://localhost:7165/api/QuizForm/getQuizQuestions?quizId=${quizID}`);
      const data = await response.json();

      if (response.ok) {
        console.log('Fetched questions:', data.questions);
        setQuestions(data.questions.map(question => ({
          ...question,
          selectedOption: null, // Initialize selectedOption
        })));
      } else {
        console.error('Error fetching questions:', data.Message);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleOptionChange = (questionIndex, optionValue) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].selectedOption = optionValue;
    setQuestions(updatedQuestions);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(question => {
      if (question.selectedOption === question.answer) {
        score++;
      }
    });
    setResult(`Score: ${score} out of ${questions.length}`);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Standard:
          <input
            type="number"
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Chapter:
          <input
            type="number"
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Language:
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Get Quiz ID</button>
      </form>

      {questions.length > 0 && (
        <div>
          <h2>Questions</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <p>Question {question.questionNumber}: {question.question}</p>
                <ul>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name={`question_${index}`}
                        value={question.option1}
                        checked={question.selectedOption === question.option1}
                        onChange={() => handleOptionChange(index, question.option1)}
                      />
                      {question.option1}
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name={`question_${index}`}
                        value={question.option2}
                        checked={question.selectedOption === question.option2}
                        onChange={() => handleOptionChange(index, question.option2)}
                      />
                      {question.option2}
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name={`question_${index}`}
                        value={question.option3}
                        checked={question.selectedOption === question.option3}
                        onChange={() => handleOptionChange(index, question.option3)}
                      />
                      {question.option3}
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name={`question_${index}`}
                        value={question.option4}
                        checked={question.selectedOption === question.option4}
                        onChange={() => handleOptionChange(index, question.option4)}
                      />
                      {question.option4}
                    </label>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          <button onClick={calculateScore}>Submit Quiz</button>
          {result && <p>{result}</p>}
        </div>
      )}
    </div>
  );
}

export default Quizzes;
