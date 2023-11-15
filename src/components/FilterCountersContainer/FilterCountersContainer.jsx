import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateCounters } from '../../store/actions';

// components
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';

// styles
import './FilterCountersContainer.scss';

export const FilterCountersContainer = memo(() => {
  const dispatch = useDispatch();

  const adultsCounter = useSelector(
    (state) => state.updateCounters.adultsCounter,
  );
  const childrenCounter = useSelector(
    (state) => state.updateCounters.childrenCounter,
  );
  const childrenAges = useSelector((state) => state.updateCounters.childrenAge);
  const roomsCounter = useSelector(
    (state) => state.updateCounters.roomsCounter,
  );

  const handleIncrement = (counter, max) => (e) => {
    e.preventDefault();
    if (e.target.name === 'adultsPlus' && counter < max) {
      dispatch(updateCounters({ adultsCounter: counter + 1 }));
    }
    if (e.target.name === 'childrenPlus' && counter < max) {
      dispatch(updateCounters({ childrenCounter: counter + 1 }));
    }
    if (e.target.name === 'roomsPlus' && counter < max) {
      dispatch(updateCounters({ roomsCounter: counter + 1 }));
    }
  };

  const handleDecrement = (counter, min) => (e) => {
    e.preventDefault();
    console.log('dsd');
    if (e.target.name === 'adultsMinus' && counter > min) {
      dispatch(updateCounters({ adultsCounter: counter - 1 }));
    }
    if (e.target.name === 'childrenMinus' && counter > min) {
      dispatch(updateCounters({ childrenCounter: counter - 1 }));
    }
    if (e.target.name === 'roomsMinus' && counter > min) {
      dispatch(updateCounters({ roomsCounter: counter - 1 }));
    }
  };

  const handleChildrenAgeChange = (childIndex, age) => {
    const updateChildrenAge = [...childrenAges];
    updateChildrenAge[childIndex] = age;
    dispatch(updateCounters({ childrenAge: updateChildrenAge }));
  };

  return (
    <div className="desktop-form__filter filter">
      <ul className="filter__counters">
        <li className="filter__adults counter__item">
          <Label className="counter__label" htmlFor="counter-adults">
            Adults
          </Label>
          <Button
            name="adultsMinus"
            variant="counter"
            onClick={handleDecrement(adultsCounter, 1)}
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
            name="adultsPlus"
            variant="counter"
            onClick={handleIncrement(adultsCounter, 30)}
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
            name="childrenMinus"
            variant="counter"
            onClick={handleDecrement(childrenCounter, 0)}
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
            name="childrenPlus"
            variant="counter"
            onClick={handleIncrement(childrenCounter, 10)}
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
            name="roomsMinus"
            variant="counter"
            onClick={handleDecrement(roomsCounter, 1)}
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
            name="roomsPlus"
            variant="counter"
            onClick={handleIncrement(roomsCounter, 30)}
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

FilterCountersContainer.displayName = 'FilterCountersContainer';
