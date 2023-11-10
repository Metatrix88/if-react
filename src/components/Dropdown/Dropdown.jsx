import React from 'react';
import { useNavigate } from 'react-router-dom';
import {PATH} from '../../constants/paths';

import './Dropdown.scss';

export const Dropdown = ({onSignOut}) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    onSignOut();
    navigate(PATH.login);
  };

  return (
    // <div className="dropdown" onMouseEnter={() => {}} onMouseLeave={() => {}}>
      <button onClick={handleSignOut}>Sign out</button>
    // </div>
  );
};