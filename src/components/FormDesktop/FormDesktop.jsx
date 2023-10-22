import React, { useState } from 'react';

//Components
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';
import { Button } from '../UI/Button';
// import { Calendar } from '../Calendar';

//Styles
import './FormDesktop.scss';

import { updateAvailableHotels } from '../../services/hotels';
import { useAvailableContext } from '../../contexts/Available.context';
import { CalendarDesktopForm } from '../CalendarDesktopForm';

export const FormDesktop = () => {
  const [inputCity, setInputCity] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const { setHotels } = useAvailableContext();

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'city') {
      setInputCity(event.target.value);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    const [startDate, endDate] = dateRange;

    if (dateRange) {
      const dayStart = startDate.getDate();
      const monthStart = startDate.getMonth() + 1;
      const yearStart = startDate.getFullYear();

      const dayEnd = endDate.getDate();
      const monthEnd = endDate.getMonth() + 1;
      const yearEnd = endDate.getFullYear();

      const dateStart = { dayStart, monthStart, yearStart };
      const dateEnd = { dayEnd, monthEnd, yearEnd };

      console.log(dateStart);
      console.log(dateEnd);
    }

    const data = await updateAvailableHotels(inputCity);
    setHotels(data);

    setInputCity('');
  };

  return (
    <form
      className="lg-4-col search-form--desktop desktop-form"
      onSubmit={handleSearch}
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
        <Label htmlFor="city" className="desktop-form__label-city">
          Your destination or hotel name
        </Label>
      </div>
      <CalendarDesktopForm setDateRange={setDateRange} dateRange={dateRange} />
      <div className="desktop-form__input">
        <Input
          id="filter"
          className="desktop-form__input-filter"
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
