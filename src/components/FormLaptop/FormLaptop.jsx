import React from 'react';

import { Button } from '../UI/Button';
import { Search } from '../../icons';
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';

import './FormLaptop.scss';

import { inputDestination, inputsDate, inputsProperties } from './config';

export const FormLaptop = () => {
  return (
    <form className="md-2-col sm-2-col search-form--laptop laptop-form">
      <div className="laptop-form__input-wrap laptop-form__input--full-width">
        <div className="laptop-form__destination-wrap">
          <Button
            variant="icon"
            className="laptop-form__button-icon"
            aria-label="Your destination or hotel name"
          >
            <Search />
          </Button>
          <div className="laptop-form__input laptop-form__input-destination">
            <Input
              className={inputDestination.classNameInput}
              name={inputDestination.name}
              id={inputDestination.id}
              title={inputDestination.title}
              required
            />
            <Label htmlFor={inputDestination.id}>
              {inputDestination.label}
            </Label>
          </div>
        </div>
      </div>
      {inputsDate.map(({ classNameInput, name, id, title, label }) => (
        <div key={id} className="laptop-form__input-wrap">
          <div className="laptop-form__input">
            <Input
              className={classNameInput}
              name={name}
              id={id}
              title={title}
              required
            />
            <Label htmlFor={id}>{label}</Label>
          </div>
        </div>
      ))}

      <div className="laptop-form__input-wrap laptop-form__input--full-width">
        <div className="laptop-form__properties-wrap">
          {inputsProperties.map(
            ({ classNameInput, name, id, title, label }) => (
              <div
                key={id}
                className="laptop-form__input laptop-form__input-properties"
              >
                <Input
                  className={classNameInput}
                  name={name}
                  id={id}
                  title={title}
                  required
                />
                <Label htmlFor={id}>{label}</Label>
              </div>
            ),
          )}
        </div>
      </div>
      <Button
        className="laptop-form__button-search"
        color="primary"
        type="submit"
      >
        Search
      </Button>
    </form>
  );
};
