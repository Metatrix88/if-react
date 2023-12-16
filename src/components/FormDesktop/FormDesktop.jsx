import React, { useState, useEffect, useRef, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// services
import { updateAvailableHotels } from '../../services/hotels';

// slices
import { setUpdateCounters } from '../../store/slices/updateCounters.slice';
import { setAvailableHotels } from '../../store/slices/availableHotels.slice';

// components
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';
import { Button } from '../UI/Button';
import { CalendarDesktopForm } from '../UI/CalendarDesktopForm';
import { FilterCountersContainer } from '../FilterCountersContainer';

// styles
import { useFormDesktopStyles } from './FormDesktop.styles';

export const FormDesktop = memo(() => {
  const classes = useFormDesktopStyles();
  const dispatch = useDispatch();
  const [isCountersVisible, setIsCountersVisible] = useState(false);
  const [cityInput, setCityInput] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);

  const adultsQuantity = useSelector(
    (state) => state.updateCounters.adultsCounter,
  );
  const childrenQuantity = useSelector(
    (state) => state.updateCounters.childrenCounter,
  );
  const childrenAges = useSelector((state) => state.updateCounters.childrenAge);
  const roomsQuantity = useSelector(
    (state) => state.updateCounters.roomsCounter,
  );

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

    const queryParams = {
      search: cityInput,
      startDateMillis,
      endDateMillis,
      adultsQuantity,
      validChildrenAges,
      roomsQuantity,
    };

    updateAvailableHotels(queryParams).then((hotels) =>
      dispatch(setAvailableHotels({ hotels })),
    );

    dispatch(
      setUpdateCounters({
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
    <form className={classes.root} onSubmit={handleSearch}>
      <div className={classes.inputWrapper}>
        <Input
          id="city"
          className={`${classes.input} ${classes.inputCity}`}
          name="city"
          title="Your destination or hotel name"
          placeholder=""
          value={cityInput}
          onChange={handleChange}
          required
        />
        <Label htmlFor="city" className={classes.label}>
          Your destination or hotel name
        </Label>
      </div>
      <CalendarDesktopForm setDateRange={setDateRange} dateRange={dateRange} />
      <div className={classes.inputWrapper} ref={inputRef}>
        <Input
          id="filter"
          className={classes.input}
          name="filter"
          title="2 Adults — 0 Children — 1 Room"
          placeholder="2 Adults — 0 Children — 1 Room"
          onChange={handleChange}
          onClick={toggleCountersVisibility}
          value={`${adultsQuantity} Adults — ${childrenQuantity} Children — ${roomsQuantity} Room`}
        />
        <Label className={classes.visuallyHidden} htmlFor="filter">
          2 Adults — 0 Children — 1 Room
        </Label>
      </div>
      <Button className={classes.button}   type="submit">
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
