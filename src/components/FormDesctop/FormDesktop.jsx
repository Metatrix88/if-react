import React, { useState } from 'react';

//Components
import { Input } from '../Input';
import { Label } from '../Label';
import { Button } from '../Button';

//Styles
import './FormDesktop.scss';

import { inputsDesktop } from './config';
import { homes } from '../Homes/config';
import { filteredHotels } from '../../assets/filter';

export const FormDesktop = ({ setHotels }) => {
  const [inputCity, setInputCity] = useState('');
  // const [inputDate, setInputDate] = useState('');
  // const [inputAdults, setInputAdults] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'city') {
      setInputCity(event.target.value);
    }
    // if (event.target.name === 'date') {
    //   setInputDate(event.target.value);
    // }
    //
    // if (event.target.name === 'adults'){
    //   setInputAdults(event.target.value);
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filterHotels = filteredHotels(homes, inputCity);
    setHotels(filterHotels);
  };

  return (
    <form
      className="lg-4-col search-form--desktop desktop-form"
      onSubmit={handleSubmit}
    >
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
              onChange={handleChange}
              required
            />
            <Label className={classNameLabel} htmlFor={id}>
              {label}
            </Label>
          </div>
        ),
      )}
      <Button
        className="desktop-form__button-search"
        color="primary"
        type="submit"
      >
        Search
      </Button>
    </form>
  );
};
