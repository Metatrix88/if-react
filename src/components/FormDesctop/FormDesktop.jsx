import React from 'react';

//Components
import { Input } from '../Input';
import { Label } from '../Label';
import { Button } from '../Button';

//Styles
import './FormDesktop.scss';

import { inputsDesktop } from './config';

export const FormDesktop = () => {
  return (
    <form className="lg-4-col search-form--desktop desktop-form">
      {inputsDesktop.map(
        ({
          id,
          name,
          title,
          label,
          placeholder,
          classNameInput,
          classNameLabel,
        }) => (
          <div key={id} className="desktop-form__input">
            <Input
              id={id}
              className={classNameInput}
              name={name}
              title={title}
              placeholder={placeholder}
              required
            />
            <Label className={classNameLabel} htmlFor={id}>
              {label}
            </Label>
          </div>
        ),
      )}
      <Button className='desktop-form__button-search' color='primary' type='submit'>Search</Button>
    </form>
  );
};
