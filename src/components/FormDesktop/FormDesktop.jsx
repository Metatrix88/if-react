import React, { useState, useEffect, useRef, memo } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setFormData, updateCounters} from '../../store/actions';

// components
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';
import { Button } from '../UI/Button';
import { CalendarDesktopForm } from '../UI/CalendarDesktopForm';
import { FilterCountersContainer } from '../FilterCountersContainer';

// styles
import './FormDesktop.scss';

export const FormDesktop = memo(() => {
  const dispatch = useDispatch();
  const [isCountersVisible, setIsCountersVisible] = useState(false);
  const [cityInput, setCityInput] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);

  const adultsCounter = useSelector((state) => state.updateCounters.adultsCounter,);
  const childrenCounter = useSelector((state) => state.updateCounters.childrenCounter,);
  const childrenAges = useSelector((state) => state.updateCounters.childrenAge);
  const roomsCounter = useSelector((state) => state.updateCounters.roomsCounter,);

  const inputRef = useRef(null);
  const countersRef = useRef(null);

  const handleChange = (event) => {
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
    const validChildrenAges = childrenAges.join(',');
    let startDateMillis;
    let endDateMillis;

    if (startDate !== null) {
      startDateMillis = startDate.getTime();
    }

    if (endDate !== null) {
      endDateMillis = endDate.getTime();
    }

    dispatch(
      setFormData({
        cityInput: cityInput,
        dateStart: startDateMillis,
        dateEnd: endDateMillis,
        adultsQuantity: adultsCounter,
        roomsQuantity: roomsCounter,
        childrenQuantityAndAge: validChildrenAges,
      }),
    );

    dispatch(updateCounters({
      adultsCounter: 1,
      childrenCounter: 0,
      childrenAge: [],
      roomsCounter: 1,
    }),
    );

    setCityInput('');
    setDateRange([null, null]);
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
