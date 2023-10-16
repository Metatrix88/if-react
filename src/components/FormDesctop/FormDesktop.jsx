import React, { useState } from 'react';

//Components
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';
import { Button } from '../UI/Button';

//Styles
import './FormDesktop.scss';

import {updateAvailableHotels} from '../../services/hotels';

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
    updateAvailableHotels(inputCity).then((data) => {
      setHotels(data);
    });
    setInputCity('');
  };

  return (
    <form
      className="lg-4-col search-form--desktop desktop-form"
      onSubmit={handleSubmit}
    >
      <div className="desktop-form__input">
        <Input
          id="city"
          className="desktop-form__input-city"
          name="city"
          title="Your destination or hotel name"
          placeholder=""
          value={inputCity}
          onChange={handleChange}
          required
        />
        <Label htmlFor="city">Your destination or hotel name</Label>
      </div>
      <div className="desktop-form__input">
        <Input
          id="date"
          className="desktop-form__input-date"
          name="date"
          title="Check-in — Check-out"
          placeholder=""
          onChange={handleChange}
        />
        <Label htmlFor="date">Check-in — Check-ou</Label>
      </div>
      <div className="desktop-form__input">
        <Input
          id="filter"
          className="desktop-form__input-city"
          name="filter"
          title="2 Adults — 0 Children — 1 Room"
          placeholder="2 Adults — 0 Children — 1 Room"
          onChange={handleChange}
        />
        <Label className="visually-hidden" htmlFor="filter">
          2 Adults — 0 Children — 1 Room
        </Label>
      </div>
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
