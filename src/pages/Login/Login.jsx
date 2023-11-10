import React, { useId, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {PATH} from '../../constants/paths';

// components
import { Button } from '../../components/UI/Button';
import {Label} from '../../components/UI/Label';
import {Input} from '../../components/UI/Input';

// icons
import { Logo } from '../../icons';

// styles
import './Login.scss';

export const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate()

  const emailId = useId();
  const passwordId = useId();

  const handleLogin = () => {
    if (userEmail && userPassword) {
      navigate(PATH.index)
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <Logo className="login__logo" />
      <form className="login__form">
        <Label className="login__label" htmlFor={emailId}>
          Email
        </Label>
        <Input
          className="login__text-field"
          id={emailId}
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
        />
        <Label className="login__label" htmlFor={passwordId}>
          Password
        </Label>
        <Input
          className="login__text-field"
          id={passwordId}
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={(event) => setUserPassword(event.target.value)}
        />
        <Button
          className="login__button"
          color="primary"
          onClick={handleLogin}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};
