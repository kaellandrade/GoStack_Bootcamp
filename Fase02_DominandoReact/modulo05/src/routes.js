import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Repository from './pages/Repository';

export default function MyRoutes() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/repository/:repository"
                    element={<Repository />}
                />
            </Routes>
        </Router>
    );
}
