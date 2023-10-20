import React from 'react';
import classNames from 'classnames';

import DatePicker from 'react-datepicker';

// styles
import 'react-datepicker/dist/react-datepicker.css';
import './CalendarDesktopForm.scss';

export const CalendarDesktopForm = ({ className, dateRange, setDateRange }) => {
  const [startDate, endDate] = dateRange;

  const handleChange = (update) => {
    setDateRange(update);
  };

  return (
    <div className={classNames('date-input', className)}>
      <div className="date-label">Check-in — Check-out</div>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        monthsShown={2}
        onChange={handleChange}
        isClearable={true}
      />
    </div>
  );
};
