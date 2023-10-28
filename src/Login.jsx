import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #3494e6, #ec6ead);

  @media (max-width: 768px) {
    height: auto;
  }
`;

const LoginForm = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 0;
  padding: 10px 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  span {
    margin-right: 10px;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    input {
      font-size: 14px;
    }

    span {
      font-size: 20px;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

const ForgotPassword = styled.a`
  text-decoration: none;
  color: #007bff;
  margin: 10px 0;
  font-size: 14px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpText = styled.span`
  color: #333;
  font-size: 16px;
  margin: 10px 0;
`;

const SignUpLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  margin: 10px 0;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password && password.length >= 6) {
      // You can add your form submission or authentication logic here
      // After successful submission, reset the input fields
      setUsername('');
      setPassword('');
      setError('');
    } else if (!username || !password) {
      setError('Please fill in both username and password fields.');
    } else {
      setError('Password should be at least 6 characters.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <InputField>
          <span>👤</span>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputField>
        <InputField>
          <span>🔒</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputField>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="submit">Submit</SubmitButton>
        <ForgotPassword href="#">Forgot your password?</ForgotPassword>
        <SignUpText>Don't have an account? <SignUpLink href="#">Sign up</SignUpLink></SignUpText>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
