import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';
import './assets/css/index.css';
import Drawer from './components/Drawer';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import NewPostPage from './pages/NewPostPage';
import MessagePage from './pages/MessagePage';
import { AuthContext } from './components/AuthContext';
import MyTripsPage from './pages/MyTripsPage';
import JourneysPage from './pages/JourneysPage';
import SignupPage from './pages/SignupPage';
import PostPage from './pages/PostPage';


function App() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [loggedIn, setLoggedIn] = useState<boolean>(true);
    const [isAdmin, setIsAdmin] = useState<boolean>(true);
    return (
        <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
            <div id="page-container">
                <Header loggedIn={loggedIn} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                {loggedIn && <Drawer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
                <Routes>
                    <Route path='/users' element={<UsersPage />} />
                    <Route path='/user/:id' element={<UserPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/sign_up' element={<SignupPage />} />
                    <Route path='/new-post' element={<NewPostPage />} />
                    <Route path='/users/:id/messages' element={<MessagePage />} />
                    <Route path='/' element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path='/my-trips' element={<MyTripsPage />} />
                    <Route path='/journeys' element={<JourneysPage />} />
                    <Route path='/posts' element={<PostPage />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
};

export default App;
