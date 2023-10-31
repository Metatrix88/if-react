import React, { useState, useEffect, useRef, memo } from 'react';

// context
import {useFilterCountersContext} from '../../contexts/FilterCounters.context';
import {useFormContext} from '../../contexts/Form.context';

// components
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';
import { Button } from '../UI/Button';
import { CalendarDesktopForm } from '../CalendarDesktopForm';
import { FilterCountersContainer } from '../FilterCountersContainer';

// styles
import './FormDesktop.scss';

export const FormDesktop = memo(() => {
  const [isCountersVisible, setIsCountersVisible] = useState(false);
  const [cityInput, setCityInput] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);

  const inputRef = useRef(null);
  const countersRef = useRef(null);

  const {
    adultsCounter,
    setAdultsCounter,
    childrenCounter,
    setChildrenCounter,
    roomsCounter,
    setRoomsCounter,
    childrenAges,
  } = useFilterCountersContext();

  const {
    setInputName,
    setStartDateMillis,
    setEndDateMillis,
    setAdultsQuantity,
    setRoomsQuantity,
    setChildrenQuantityAndAge
  } = useFormContext();

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'city') {
      setCityInput(event.target.value);
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
    const validChildrenAges = childrenAges.filter((age) => age !== 0).join(',');

    if (startDate !== null) {
      setStartDateMillis(startDate.getTime());
      }

    if (endDate !== null) {
      setEndDateMillis(endDate.getTime());
      }

    setInputName(cityInput);
    setAdultsQuantity(adultsCounter);
    setChildrenQuantityAndAge(validChildrenAges);
    setRoomsQuantity(roomsCounter);

    setCityInput('');
    setDateRange([null, null]);
    setAdultsCounter(1);
    setChildrenCounter(0);
    setRoomsCounter(1);
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
          value={cityInput}
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
          value={`${adultsCounter} Adults — ${childrenCounter} Children — ${roomsCounter} Room`}
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
});

FormDesktop.displayName = 'FormDesktop';
