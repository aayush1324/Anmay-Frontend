import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TableJEE from '../Component/TableJEE';
import Home from '../Component/Home';
import TableNEET from '../Component/TableNEET';
import TableMAIN from '../Component/TableMAIN';
import AboutUs from '../Component/AboutUs';
import ContactUs from '../Component/ContactUs';
import Admin from '../Component/Admin';
import Class12 from '../Component/Class12';
import NCERTSolution from '../Component/NCERTSolution';
import CompetitivePaper from '../Component/CompetitivePaper';
import ConversionCalculator from '../Component/ConversionCalculator';
import BasicCalculator from '../Component/BasicCalculator';
import CmToMCalculator from '../Component/CmToMCalculator';
import MToKmCalculator from '../Component/MToKmCalculator';
import SideNav from '../Component/SideNav';


function AppRoutes() {
   
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Jee" element={<TableJEE />} />
            <Route path="Neet" element={<TableNEET />} />
            <Route path="Main" element={<TableMAIN />} />
            <Route path="JEE" element={<CompetitivePaper examType={'IIT JEE'}/>} />
            <Route path="MAIN" element={<CompetitivePaper examType={'JEE MAIN'}/>} />
            <Route path="NEET" element={<CompetitivePaper examType={'NEET'} />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="admin" element={<Admin />} />
            <Route path="Class12" element={<Class12 />} />
            <Route path="class12" element={<NCERTSolution standard={12}/>} />
            <Route path="class11" element={<NCERTSolution standard={11}/>} />
            <Route path="class10" element={<NCERTSolution standard={10} />} />
            <Route path="class9" element={<NCERTSolution standard={9} />} />
            <Route path="class8" element={<NCERTSolution standard={8} />} />
            <Route path="class7" element={<NCERTSolution standard={7} />} />
            <Route path="class6" element={<NCERTSolution standard={6} />} />
            <Route path="class5" element={<NCERTSolution standard={5} />} />
            <Route path="class4" element={<NCERTSolution standard={4} />} />
            <Route path="class3" element={<NCERTSolution standard={3} />} />
            <Route path="class2" element={<NCERTSolution standard={2} />} />
            <Route path="class1" element={<NCERTSolution standard={1} />} />
            <Route path="ConversionCal" element={<ConversionCalculator />} />
            <Route path="CmToMCalculator" element={<CmToMCalculator />} />
            <Route path="MToKmCalculator" element={<MToKmCalculator />} />
            <Route path="SideNav" element={<SideNav />} />

            <Route path="BasicCal" element={<BasicCalculator />} />

        </Routes>
    );
}

export default AppRoutes;
