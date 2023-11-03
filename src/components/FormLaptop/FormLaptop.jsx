import React, { useState } from 'react';

// contexts
import {useFilterCountersContext} from '../../contexts/FilterCounters.context';
import {useFormContext} from '../../contexts/Form.context';

// components
import { Button } from '../UI/Button';
import { Search } from '../../icons';
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';
import {
  CalendarLaptopFormIn,
  CalendarLaptopFormOut,
} from '../CalendarLaptopForm';

// styles
import './FormLaptop.scss';

export const FormLaptop = () => {
  const [cityInput, setCityInput] = useState('');
  const [dateStart, setDateStart] = useState(null);
  const [dateOut, setDateOut] = useState(null);

  const {
    adultsCounter,
    setAdultsCounter,
    childrenCounter,
    setChildrenCounter,
    roomsCounter,
    setRoomsCounter,
  } = useFilterCountersContext();

  const {
    setInputName,
    setStartDateMillis,
    setEndDateMillis,
    setAdultsQuantity,
    setRoomsQuantity,
  } = useFormContext();

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'destination') {
      setCityInput(event.target.value);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    if (dateStart !== null) {
      setStartDateMillis(dateStart.getTime());
    }

    if (dateOut !== null) {
      setEndDateMillis(dateOut.getTime());
    }

    setInputName(cityInput);
    setAdultsQuantity(adultsCounter);
    setRoomsQuantity(roomsCounter);

    setCityInput('');
    setDateStart(null);
    setDateOut(null);
    setAdultsCounter(1);
    setChildrenCounter(0);
    setRoomsCounter(1);
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
              value={cityInput}
              onChange={handleChange}
            />
            <Label htmlFor="destination">Your destination or hotel name</Label>
          </div>
        </div>
      </div>

      <div className="laptop-form__input-wrap">
        <CalendarLaptopFormIn
          setDateStart={setDateStart}
          dateStart={dateStart}
          title="Check-in"
          id="date-in"
          name="dateIn"
        />
      </div>
      <div className="laptop-form__input-wrap">
        <CalendarLaptopFormOut
          setDateOut={setDateOut}
          dateOut={dateOut}
          title="Check-out"
          id="date-out"
          name="dateOut"
        />
      </div>

      <div className="laptop-form__input-wrap laptop-form__input--full-width">
        <div className="laptop-form__properties-wrap">
          <div className="laptop-form__input laptop-form__input-properties">
            <Input
              className="input-laptop"
              name="adults"
              id="adults"
              title="Adults"
              value={adultsCounter}
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
              value={childrenCounter}
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
              value={roomsCounter}
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
