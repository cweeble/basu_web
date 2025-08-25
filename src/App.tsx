import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginPage from './LoginPage';
import BasuScreen1 from './BasuScreen1';
import Navbar from './components/Navbar';
import './App.scss';

// Checks login status based on cookie being present
const checkLoginStatus = () => {
    return document.cookie.includes('current_user_id=');
};

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(checkLoginStatus());

    // Check the login status on initial render
    useEffect(() => {
        setIsLoggedIn(checkLoginStatus());
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
                />
                <Route
                    path="/basuscreen1"
                    element={
                        isLoggedIn ? <BasuScreen1 /> : <Navigate to="/" />
                    } // Redirect to login if not logged in
                />
            </Routes>
        </BrowserRouter>
    );
}
