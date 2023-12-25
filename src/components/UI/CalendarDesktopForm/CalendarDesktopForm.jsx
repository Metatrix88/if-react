import React, { memo, useState } from 'react';
import { string, func, array } from 'prop-types';
import { useTheme } from 'react-jss';

import DatePicker from 'react-datepicker';

// styles
import 'react-datepicker/dist/react-datepicker.css';
import './CalendarDesktopForm.scss';
import { useFormDesktopStyles } from '../../FormDesktop/FormDesktop.styles';

export const CalendarDesktopForm = memo(({ dateRange, setDateRange }) => {
  const theme = useTheme();
  const classes = useFormDesktopStyles({ theme });
  const [isInputFocused, setInputFocused] = useState(false);
  const [startDate, endDate] = dateRange;

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = (event) => {
    if (event.target.value === '') {
      setInputFocused(false);
    }
  };

  const handleChange = (update) => {
    setDateRange(update);
  };

  return (
    <div className={classes.inputWrapper}>
      <DatePicker
        className={`${classes.input} ${classes.inputDate}`}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        monthsShown={2}
        onChange={handleChange}
        isClearable={true}
        id="date"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        htmlFor="date"
        className={`${classes.label} ${
          isInputFocused ? classes.focusDate : ''
        }`}
      >
        Check-in — Check-out
      </label>
    </div>
  );
});

CalendarDesktopForm.propTypes = {
  className: string,
  dateRange: array,
  setDateRange: func,
};

CalendarDesktopForm.displayName = 'CalendarDesktopForm';
