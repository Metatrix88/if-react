import React from 'react';
import classNames from 'classnames';

import DatePicker from 'react-datepicker';

// styles
import 'react-datepicker/dist/react-datepicker.css';
import './CalendarLaptopForm.scss';

export const CalendarLaptopFormIn = ({
  title,
  className,
  id,
  name,
  dateIn,
  setDateIn,
}) => {
  const handleChange = (date) => {
    setDateIn(date);
  };

  return (
    <div className="laptop-form__input">
      <DatePicker
        className={classNames(className)}
        showIcon
        selected={dateIn}
        onChange={handleChange}
        id={id}
        name={name}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};
