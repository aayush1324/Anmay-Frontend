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


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="JEE" element={<TableJEE />} />
            <Route path="NEET" element={<TableNEET />} />
            <Route path="MAIN" element={<TableMAIN />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="admin" element={<Admin />} />
            <Route path="class12" element={<Class12 />} />


        </Routes>
    );
}

export default AppRoutes;
