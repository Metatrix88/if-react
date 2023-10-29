import React, {memo, useState} from 'react';
import classNames from 'classnames';

import DatePicker from 'react-datepicker';

// styles
import 'react-datepicker/dist/react-datepicker.css';
import './CalendarDesktopForm.scss';

export const CalendarDesktopForm = memo(({ className, dateRange, setDateRange }) => {
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
    <div className={classNames('desktop-form__input', className)}>
      <DatePicker
        className="desktop-form__input-date"
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
        className={`desktop-form__label-date ${
          isInputFocused ? 'focused' : ''
        }`}
      >
        Check-in — Check-out
      </label>
    </div>
  );
});

CalendarDesktopForm.displayName = 'CalendarDesktopForm';
