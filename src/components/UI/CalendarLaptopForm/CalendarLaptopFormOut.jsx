import React from 'react';

import DatePicker from 'react-datepicker';

// styles
import 'react-datepicker/dist/react-datepicker.css';
import './CalendarLaptopForm.scss';
import { useFormLaptop } from '../../FormLaptop/FormLaptop.styles';

export const CalendarLaptopFormOut = ({
  title,
  id,
  name,
  dateOut,
  setDateOut,
}) => {
  const classes = useFormLaptop();
  const handleChange = (date) => {
    setDateOut(date);
  };

  return (
    <div className={classes.wrapperInputDate}>
      <DatePicker
        className={classes.input}
        showIcon
        selected={dateOut}
        onChange={handleChange}
        id={id}
        name={name}
      />
      <label className={classes.label} htmlFor={id}>
        {title}
      </label>
    </div>
  );
};
