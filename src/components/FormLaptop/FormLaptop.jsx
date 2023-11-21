import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

import {setFormData} from '../../store/actions';

// components
import { Button } from '../UI/Button';
import { Search } from '../../icons';
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';
import {
  CalendarLaptopFormIn,
  CalendarLaptopFormOut,
} from '../UI/CalendarLaptopForm';

// styles
import './FormLaptop.scss';

export const FormLaptop = () => {
  const dispatch = useDispatch();
  const [cityInput, setCityInput] = useState('');
  const [dateStart, setDateStart] = useState(null);
  const [dateOut, setDateOut] = useState(null);
  const [adultsQuantity, setAdultsQuantity] = useState(1);
  const [childrenQuantity, setChildrenQuantity] = useState(0);
  const [roomsQuantity, setRoomsQuantity] = useState(1);

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'destination') {
      setCityInput(event.target.value);
    }

    if (event.target.name === 'adults') {
      setAdultsQuantity(event.target.value);
    }
    if (event.target.name === 'children') {
      setChildrenQuantity(event.target.value);
    }
    if (event.target.name === 'rooms') {
      setRoomsQuantity(event.target.value);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    let dateStartMillis;
    let dateEndMillis;

    if (dateStart !== null) {
      dateStartMillis = dateStart.getTime();
    }

    if (dateOut !== null) {
      dateEndMillis = dateOut.getTime();
    }

    dispatch(
      setFormData({
        cityInput: cityInput,
        dateStart: dateStartMillis,
        dateEnd: dateEndMillis,
        adultsQuantity: adultsQuantity,
        roomsQuantity: roomsQuantity,
        childrenQuantityAndAge: childrenQuantity,
      }),
    );

    setCityInput('');
    setDateStart(null);
    setDateOut(null);
    setAdultsQuantity(1);
    setChildrenQuantity(0);
    setRoomsQuantity(1);
  };

  return (
    <form
      className="laptop-form md-2-col sm-2-col search-form--laptop"
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
              value={adultsQuantity}
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
              value={childrenQuantity}
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
              value={roomsQuantity}
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
