import React, { useId } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// constants
import { PATH } from '../../constants/paths';
import { setStatus } from '../../store/slices/auth.slice';
import { authStatuses } from '../../constants/authStatuses';

// components
import { Button } from '../../components/UI/Button';
import { Label } from '../../components/UI/Label';
import { Input } from '../../components/UI/Input';

// icons
import { Logo } from '../../icons';

// styles
import { useLoginStyles } from './Login.styles';

export const Login = () => {
  const classes = useLoginStyles();
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
      dispatch(setStatus(authStatuses.loggedIn));
      navigate(PATH.index);
    }
  };

  return (
    <div className={classes.root}>
      <Logo className={classes.logo} />
      <form className={classes.form} onSubmit={handleSubmit}>
        <Label className={classes.label} htmlFor={emailId}>
          Email
        </Label>
        <Input
          className={classes.textField}
          name="email"
          id={emailId}
          type="email"
          placeholder="Email"
          autoComplete="off"
        />
        <Label className={classes.label} htmlFor={passwordId}>
          Password
        </Label>
        <Input
          className={classes.textField}
          name="password"
          id={passwordId}
          type="password"
          placeholder="Password"
        />
        <Button className={classes.button} color="primary" type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};
