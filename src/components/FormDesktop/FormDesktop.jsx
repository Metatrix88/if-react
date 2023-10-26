import React, { useState, useEffect, useRef } from 'react';

import { updateAvailableHotels } from '../../services/hotels';

// context
import { useAvailableContext } from '../../contexts/Available.context';
import { useFilterCountersContext } from '../../contexts/FilterCounters.context';

// components
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';
import { Button } from '../UI/Button';
import { CalendarDesktopForm } from '../CalendarDesktopForm';
import { FilterCountersContainer } from '../FilterCountersContainer';

// styles
import './FormDesktop.scss';

export const FormDesktop = () => {
  const [isCountersVisible, setIsCountersVisible] = useState(false);
  const [inputCity, setInputCity] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const { setHotels } = useAvailableContext();
  const { adults, childrenCount, rooms, childrenAges } = useFilterCountersContext();
  const inputRef = useRef(null);
  const countersRef = useRef(null);

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'city') {
      setInputCity(event.target.value);
    }
  };

  const toggleCountersVisibility = () => {
    setIsCountersVisible(!isCountersVisible);
  };

  const handleClick = (event) => {
    if (inputRef.current.contains(event.target)) {
      return;
    }

    if (countersRef.current && !countersRef.current.contains(event.target)) {
      setIsCountersVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();

    const [startDate, endDate] = dateRange;
    const startDateMillis = startDate.getTime();
    const endDateMillis = endDate.getTime();
    const validChildrenAges = childrenAges.filter((age) => age !== 0);

    const queryParams = {
      search: inputCity,
      startDateMillis,
      endDateMillis,
      adults,
      children: validChildrenAges.join(','),
      rooms
    }

    const data = await updateAvailableHotels(queryParams);
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
      <div className="desktop-form__input" ref={inputRef}>
        <Input
          id="filter"
          className="desktop-form__input-filter"
          name="filter"
          title="2 Adults — 0 Children — 1 Room"
          placeholder="2 Adults — 0 Children — 1 Room"
          onChange={handleChange}
          onClick={toggleCountersVisibility}
          value={`${adults} Adults — ${childrenCount} Children — ${rooms} Room`}
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
      {isCountersVisible && (
        <div ref={countersRef}>
          <FilterCountersContainer />
        </div>
      )}
    </form>
  );
};
