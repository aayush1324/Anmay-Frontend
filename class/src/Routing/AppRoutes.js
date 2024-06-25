import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Component/Home';
import AboutUs from '../Component/AboutUs';
import ContactUs from '../Component/ContactUs';
import Admin from '../Component/Admin';
import Conversion from '../Component/Conversion Calculator/Conversion';
import SideNav from '../Component/Conversion Calculator/SideNav';
import PreviousPaper from '../Component/Competitive Paper/PreviousPaper';
import JEE from '../Component/Competitive Paper/JEE';
import NEET from '../Component/Competitive Paper/NEET';
import MAIN from '../Component/Competitive Paper/MAIN';
import Class12 from '../Component/NCERT Solution/Class12';
import NCERTSolution from '../Component/NCERT Solution/NCERTSolution';
import Quizzes from '../Component/Quiz/Quizzes';
import AdminPage from '../Component/Admin/AdminPage';
import AdminSideNav from '../Component/Admin/AdminSideNav';
import QuizPage from '../Component/Quiz/QuizPage';
import QuizSideNav from '../Component/Quiz/QuizSideNav';

const classStandards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function AppRoutes() {
   
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="admin" element={<Admin />} />
            <Route path="quiz" element= {<Quizzes />} />


            <Route path="Jee" element={<JEE />} />
            <Route path="Neet" element={<NEET />} />
            <Route path="Main" element={<MAIN />} />
            <Route path="JEE" element={<PreviousPaper examType={'IIT JEE'}/>} />
            <Route path="MAIN" element={<PreviousPaper examType={'JEE MAIN'}/>} />
            <Route path="NEET" element={<PreviousPaper examType={'NEET'} />} />

            <Route path="Class12" element={<Class12 />} />
            {classStandards.map(rank => (
                <Route 
                    key={rank} 
                    path={`class${rank}`} 
                    element={<NCERTSolution standard={rank} />} 
                />
            ))}

            <Route path="ConversionCal" element={<Conversion />} />
            <Route path="SideNav" element={<SideNav />} />

            <Route path="AdminPage" element={<AdminPage />} />
            <Route path="AdminNav" element={<AdminSideNav />} />
            
            <Route path="QuizPage" element={<QuizPage />} />
            <Route path="QuizNav" element={<QuizSideNav/>} />

        </Routes>
    );
}

export default AppRoutes;
