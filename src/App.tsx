import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';
import './assets/css/index.css';


function App() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    return (
        <div id="page-container">
            <Routes>
                <Route path='/users' element={<UsersPage />} />
                <Route path='/users/:id' element={<UserPage />} />
                <Route path='/' element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;
