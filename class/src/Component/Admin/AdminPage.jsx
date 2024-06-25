import React, { useState, useRef } from 'react';
import AdminSideNav from './AdminSideNav';
import CompetitivePaper from './CompetitivePaper';
import NCERT_Solution from './NCERT_Solution';
import QuizAll from './QuizAll';
import './AdminPage.css'


function AdminPage(props) {
    const [currentUpload, setCurrentUpload] = useState('competitive');

    return (
        <div className="containerbox">
            <AdminSideNav setUpload={setCurrentUpload} />

            <div className="Upload">
                {currentUpload === 'competitive' && <CompetitivePaper />}
                {currentUpload === 'ncert' && <NCERT_Solution />}
                {currentUpload === 'quiz' && <QuizAll />}
            </div>
        </div>
    );
}

export default AdminPage;