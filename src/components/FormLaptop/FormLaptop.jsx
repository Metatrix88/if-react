import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setFormData } from '../../store/slices/searchParams.slice';

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
import { useFormLaptop } from './FormLaptop.styles';

export const FormLaptop = () => {
  const classes = useFormLaptop();
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
    <form className={classes.root} onSubmit={handleSearch}>
      <div className={`${classes.wrapper} ${classes.wrapperFullWidth}`}>
        <div className={classes.wrapperDestination}>
          <Button
            variant="icon"
            className={classes.buttonSearch}
            aria-label="Your destination or hotel name"
          >
            <Search />
          </Button>
          <div className={classes.wrapperInputDestination}>
            <Input
              className={classes.input}
              name="destination"
              id="destination"
              title="Your destination or hotel name"
              value={cityInput}
              onChange={handleChange}
            />
            <Label className={classes.label} htmlFor="destination">
              Your destination or hotel name
            </Label>
          </div>
        </div>
      </div>

      <div className={classes.wrapper}>
        <CalendarLaptopFormIn
          setDateStart={setDateStart}
          dateStart={dateStart}
          title="Check-in"
          id="date-in"
          name="dateIn"
        />
      </div>
      <div className={classes.wrapper}>
        <CalendarLaptopFormOut
          setDateOut={setDateOut}
          dateOut={dateOut}
          title="Check-out"
          id="date-out"
          name="dateOut"
        />
      </div>

      <div className={`${classes.wrapper} ${classes.wrapperFullWidth}`}>
        <div className={classes.wrapperProperties}>
          <div className={classes.wrapperInputProperties}>
            <Input
              className={classes.input}
              name="adults"
              id="adults"
              title="Adults"
              value={adultsQuantity}
              onChange={handleChange}
            />
            <Label className={classes.label} htmlFor="adults">
              Adults
            </Label>
          </div>
          <div className={classes.wrapperInputProperties}>
            <Input
              className={classes.input}
              name="children"
              id="children"
              title="Children"
              value={childrenQuantity}
              onChange={handleChange}
            />
            <Label className={classes.label} htmlFor="children">
              Children
            </Label>
          </div>
          <div className={classes.wrapperInputProperties}>
            <Input
              className={classes.input}
              name="rooms"
              id="rooms"
              title="Rooms"
              value={roomsQuantity}
              onChange={handleChange}
            />
            <Label className={classes.label} htmlFor="rooms">
              Rooms
            </Label>
          </div>
        </div>
      </div>
      <Button className={classes.button} color="primary" type="submit">
        Search
      </Button>
    </form>
  );
};
