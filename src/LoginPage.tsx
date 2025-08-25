import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputField from './components/InputField';
import Button from './components/Button';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function LoginPage({ onLogin }: { onLogin: (userId: string) => void }) {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        // Accept any input as valid
        document.cookie = `current_user_id=${userId}; path=/; SameSite=Lax;`;
        onLogin(userId);
        navigate('/basuscreen1');
    };

    return (
        <LoginContainer>
            <Form onSubmit={handleLogin}>
                <InputField
                    label="User ID:"
                    type="text"
                    name="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />

                <InputField
                    label="Password:"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button type="submit" label="Sign In" />
            </Form>
        </LoginContainer>
    );
}
