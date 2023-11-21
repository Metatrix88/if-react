import React, { useId } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// constants
import { PATH } from '../../constants/paths';
import { setAuthStatus } from '../../store/actions';
import { authStatuses } from '../../constants/authStatuses';

// components
import { Button } from '../../components/UI/Button';
import { Label } from '../../components/UI/Label';
import { Input } from '../../components/UI/Input';

// icons
import { Logo } from '../../icons';

// styles
import './Login.scss';

export const Login = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email && password) {
      dispatch(setAuthStatus(authStatuses.loggedIn));
      navigate(PATH.index);
    }
  };

  return (
    <div className="login">
      <Logo className="login__logo" />
      <form className="login__form" onSubmit={handleSubmit}>
        <Label className="login__label" htmlFor={emailId}>
          Email
        </Label>
        <Input
          className="login__text-field"
          name="email"
          id={emailId}
          type="email"
          placeholder="Email"
          autoComplete="off"
        />
        <Label className="login__label" htmlFor={passwordId}>
          Password
        </Label>
        <Input
          className="login__text-field"
          name="password"
          id={passwordId}
          type="password"
          placeholder="Password"
        />
        <Button className="login__button" color="primary" type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};
