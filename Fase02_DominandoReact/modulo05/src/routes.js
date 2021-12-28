import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Repository from './pages/Repository';

export default function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/repository" element={<Repository />}/>
            </Routes>
        </Router>
    );
}
