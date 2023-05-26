import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';
import './assets/css/index.css';
import Drawer from './components/Drawer';
import Header from './components/Header';
import SigninPage from './pages/SigninPage';
import NewPostPage from './pages/NewPostPage';
import MessagePage from './pages/MessagePage';
import { AuthContext } from './components/AuthContext';
import { User } from './types/user';
import ProfilePage from './pages/ProfilePage';
import Message from './pages/MessagePage';
import SignupPage from './pages/SignupPage';

const userTest = {
    email: 'johndoe@test.com',
    araCode: 'wechje',
    // role: 'ADMIN',
    role: 'BASIC',
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
    const [isAuthInitialized, setIsAuthInitialized] = useState(false);
    
    useEffect(() => {
        const userInfo = localStorage.getItem('user');
        console.log('INSIDE FUNCTION')
        if (userInfo) {
            const user = JSON.parse(userInfo); 
            setUser(user);
            // setIsAuthInitialized(true);
        } else {
            setIsAuthInitialized(false);
        }
    }, [isAuthInitialized]); // No dependency, will run only once when component mounts
    
    

    return (
        <AuthContext.Provider value={{ user, setUser, menuOpen, setMenuOpen, isAuthInitialized, setIsAuthInitialized }}>
            <div id="page-container">
                <Header/>
                <Drawer />
                <Routes>
                    <Route path='/admin/users' element={<UsersPage />} />
                    <Route path='/users/:id' element={<UserPage />} />
                    <Route path='/login' element={<SigninPage />} />
                    <Route path='/sign-up' element={<SignupPage />} />
                    <Route path='/new-post' element={<NewPostPage />} />
                    <Route path='/users/:id/messages' element={<MessagePage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/messages' element={<MessagePage />} />
                    <Route path='/' element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
};

export default App;
