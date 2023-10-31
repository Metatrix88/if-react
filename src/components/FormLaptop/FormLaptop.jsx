import React, { useState } from 'react';

// import { updateAvailableHotels } from '../../services/hotels';

// contexts
// import { useAvailableContext } from '../../contexts/Available.context';

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
  const [inputCity, setInputCity] = useState('');
  // const [date, setDate] = useState(new Date());
  const [dateIn, setDateIn] = useState(new Date());
  const [dateOut, setDateOut] = useState(new Date());
  // const { setHotels } = useAvailableContext();

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'destination') {
      setInputCity(event.target.value);
    }
  };

  console.log(inputCity)

  const handleSearch = async (event) => {
    event.preventDefault();

    if (dateIn) {
      const dayStart = dateIn.getDate();
      const monthStart = dateIn.getMonth() + 1;
      const yearStart = dateIn.getFullYear();

      const dateStart = { dayStart, monthStart, yearStart };

      console.log(1, dateStart);
    }

    if (dateOut) {
      const dayEnd = dateOut.getDate();
      const monthEnd = dateOut.getMonth() + 1;
      const yearEnd = dateOut.getFullYear();

      const dateEnd = { dayEnd, monthEnd, yearEnd };

      console.log(2, dateEnd);
    }

    // const data = await updateAvailableHotels(inputCity);
    // setHotels(data);

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
        <CalendarLaptopFormIn
          setDateIn={setDateIn}
          dateIn={dateIn}
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
