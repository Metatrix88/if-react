import React, { useState } from 'react';

// components
import { Button } from '../UI/Button';
import { Search } from '../../icons';
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';

// styles
import './FormLaptop.scss';
import { updateAvailableHotels } from '../../services/hotels';
import { useAvailableContext } from '../../contexts/Available.context';

export const FormLaptop = () => {
  const [inputCity, setInputCity] = useState('');
  const { setHotels } = useAvailableContext();

  // const [inputDate, setInputDate] = useState('');
  // const [inputAdults, setInputAdults] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'destination') {
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

  const handleSearch = async (event) => {
    event.preventDefault();
    const data = await updateAvailableHotels(inputCity);
    setHotels(data);

    setInputCity('');
  };

  return (
    <form
      className="md-2-col sm-2-col search-form--laptop laptop-form"
      onSubmit={handleSearch}
    >
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
              className="input-laptop"
              name="destination"
              id="destination"
              title="Your destination or hotel name"
              onChange={handleChange}
            />
            <Label htmlFor="destination">Your destination or hotel name</Label>
          </div>
        </div>
      </div>

      <div className="laptop-form__input-wrap">
        <div className="laptop-form__input">
          <Input
            className="input-laptop"
            name="date"
            id="checkIn"
            title="Check-in"
            onChange={handleChange}
          />
          <Label htmlFor="checkIn">Check-in</Label>
        </div>
      </div>
      <div className="laptop-form__input-wrap">
        <div className="laptop-form__input">
          <Input
            className="input-laptop"
            name="date"
            id="checkOut"
            title="Check-out"
            onChange={handleChange}
          />
          <Label htmlFor="checkOut">Check-out</Label>
        </div>
      </div>

      <div className="laptop-form__input-wrap laptop-form__input--full-width">
        <div className="laptop-form__properties-wrap">
          <div className="laptop-form__input laptop-form__input-properties">
            <Input
              className="input-laptop"
              name="adults"
              id="adults"
              title="Adults"
              onChange={handleChange}
            />
            <Label htmlFor="adults">Adults</Label>
          </div>
          <div className="laptop-form__input laptop-form__input-properties">
            <Input
              className="input-laptop"
              name="children"
              id="children"
              title="Children"
              onChange={handleChange}
            />
            <Label htmlFor="children">Children</Label>
          </div>
          <div className="laptop-form__input laptop-form__input-properties">
            <Input
              className="input-laptop"
              name="rooms"
              id="rooms"
              title="Rooms"
              onChange={handleChange}
            />
            <Label htmlFor="rooms">Rooms</Label>
          </div>
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
