import 'antd/dist/reset.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './component/layout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Posts from './pages/Posts';
import NoPage from './pages/NoPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='user' element={<Users />} />
                    <Route path='posts' element={<Posts />} />
                    <Route path='*' element={<NoPage />} />
                </Route>
            </Routes>
        </Router>
    );
};
export default App;
