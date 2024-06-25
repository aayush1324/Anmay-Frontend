import React, { useState, useRef } from 'react';
import QuizSideNav from './QuizSideNav';
import BoardExam from './BoardExam';
import CompetitiveExam from './CompetitiveExam';

function QuizPage(props) {
    const [currentPage, setCurrentPage] = useState('competitive');

    return (
        <div className="containerbox">
            <QuizSideNav setQuiz = {setCurrentPage} />

            <div className="Page">
                {currentPage === 'board' && <BoardExam />}
                {currentPage === 'competitive' && <CompetitiveExam />}
            </div>
        </div>
    );
}

export default QuizPage;