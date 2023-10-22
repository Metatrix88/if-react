import React from 'react';
import classNames from 'classnames';

import DatePicker from 'react-datepicker';

// styles
import 'react-datepicker/dist/react-datepicker.css';
import './CalendarLaptopForm.scss';

export const CalendarLaptopFormOut = ({ title, className, id, name, dateOut, setDateOut }) => {

  const handleChange = (date) => {
    setDateOut(date);
  };

  return (
    <div className="laptop-form__input">
      <DatePicker
        className={classNames(className)}
        showIcon
        selected={dateOut}
        onChange={handleChange}
        id={id}
        name={name}
      />
      <label htmlFor={id}>
        {title}
      </label>
    </div>
  );
};