import { useState, useEffect, useContext } from 'react';
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
import { User } from './types/user';
import ProfilePage from './pages/ProfilePage';

const userTest = {
    email: 'johndoe@test.com',
    araCode: 'wechje',
    role: 'ADMIN',
    blackListed: false,
    // fieldId: 'ewhgcu3hg',
    field: 'Informatique',
    // centerId: 'hedwhhj',
    center: 'CNAM Saint Etienne',
    name: 'john',
    surname: 'Doe'
}

function App() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [user, setUser] = useState<User | undefined>();

    useEffect(() => {
        if (userTest) {
            setUser(userTest)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, menuOpen, setMenuOpen }}>
            <div id="page-container">
                <Header/>
                {user && <Drawer />}
                <Routes>
                    <Route path='/admin/users' element={<UsersPage />} />
                    <Route path='/users/:id' element={<UserPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/new-post' element={<NewPostPage />} />
                    <Route path='/users/:id/messages' element={<MessagePage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/' element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
};

export default App;
