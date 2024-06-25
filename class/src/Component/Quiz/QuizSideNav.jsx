import React from 'react';

function QuizSideNav({setQuiz}) {
    return (
        <div className="sidenav">
            <div class="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100">
                
                <h1>Quiz</h1>
                <br />
                <br />
                <ul class="nav " id="menu">
                    <li onClick={() => setQuiz('board')}><h4>Board Quiz</h4></li>
                    <br />
                    <br />
                    <li onClick={() => setQuiz('competitive')}><h4>Competitive Quiz</h4></li>
                    <br />
                </ul>
            </div>
        </div>
    );
}

export default QuizSideNav;

