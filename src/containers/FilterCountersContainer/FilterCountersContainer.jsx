import React, { memo } from 'react';

import { useFilterCountersContext } from '../../contexts/FilterCounters.context';

// components
import { Button } from '../../components/UI/Button';
import { Input } from '../../components/UI/Input';
import { Label } from '../../components/UI/Label';

// styles
import './FilterCountersContainer.scss';

export const FilterCountersContainer = memo(() => {
  const {
    adultsCounter,
    setAdultsCounter,
    roomsCounter,
    setRoomsCounter,
    childrenCounter,
    setChildrenCounter,
    childrenAges,
    setChildrenAges,
  } = useFilterCountersContext();

  const handleIncrement = (counter, setCounter, max) => (e) => {
    e.preventDefault();
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = (counter, setCounter, min) => (e) => {
    e.preventDefault();
    if (counter > min) {
      setCounter(counter - 1);
    }
  };

  const handleChildrenAgeChange = (childIndex, age) => {
    const updateChildrenAge = [...childrenAges];
    updateChildrenAge[childIndex] = age;
    setChildrenAges(updateChildrenAge);
  };

  return (
    <div className="desktop-form__filter filter">
      <ul className="filter__counters">
        <li className="filter__adults counter__item">
          <Label className="counter__label" htmlFor="counter-adults">
            Adults
          </Label>
          <Button
            variant="counter"
            onClick={handleDecrement(adultsCounter, setAdultsCounter, 1)}
            disabled={adultsCounter === 1}
          >
            -
          </Button>
          <Input
            className="counter__input"
            id="counter-adults"
            name="counter-adults"
            value={adultsCounter}
            disabled
          />
          <Button
            variant="counter"
            onClick={handleIncrement(adultsCounter, setAdultsCounter, 30)}
            disabled={adultsCounter === 30}
          >
            +
          </Button>
        </li>
        <li className="filter__children counter__item">
          <Label className="counter__label" htmlFor="counter-children">
            Children
          </Label>
          <Button
            variant="counter"
            onClick={handleDecrement(childrenCounter, setChildrenCounter, 0)}
            disabled={childrenCounter === 0}
          >
            -
          </Button>
          <Input
            className="counter__input"
            id="counter-children"
            name="counter-children"
            value={childrenCounter}
            disabled
          />
          <Button
            variant="counter"
            onClick={handleIncrement(childrenCounter, setChildrenCounter, 10)}
            disabled={childrenCounter === 10}
          >
            +
          </Button>
        </li>
        <li className="filter__rooms counter__item">
          <Label className="counter__label" htmlFor="counter-rooms">
            Rooms
          </Label>
          <Button
            variant="counter"
            onClick={handleDecrement(roomsCounter, setRoomsCounter, 1)}
            disabled={roomsCounter === 1}
          >
            -
          </Button>
          <Input
            className="counter__input"
            id="counter-rooms"
            name="counter-rooms"
            value={roomsCounter}
            disabled
          />
          <Button
            variant="counter"
            onClick={handleIncrement(roomsCounter, setRoomsCounter, 30)}
            disabled={roomsCounter === 30}
          >
            +
          </Button>
        </li>
      </ul>
      {childrenCounter > 0 && (
        <div>
          <p className="filter__children-question">
            What is the age of the child you’re travelling with?
          </p>
          <div className="filter-container__children-selects">
            {Array.from({ length: childrenCounter }, (_, index) => (
              // <div key={index}>
              <select
                key={index}
                className="filter__children-select"
                value={childrenAges[index]}
                onChange={(e) => handleChildrenAgeChange(index, e.target.value)}
              >
                {Array.from({ length: 18 }, (_, age) => (
                  <option key={age} value={age}>
                    {age} years old
                  </option>
                ))}
              </select>
              // </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

FilterCountersContainer.displayName = 'FilterCountersContainer';
