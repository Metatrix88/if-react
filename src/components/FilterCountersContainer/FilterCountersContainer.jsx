import React from 'react';

// components
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';

// styles
import './FilterCountersContainer.scss';

import { useFilterCountersContext } from '../../contexts/FilterCounters.context';

export const FilterCountersContainer = () => {
  // const [childCount, setChilCount] = useState([]);
  const { adults, setAdults } = useFilterCountersContext();
  const { rooms, setRooms } = useFilterCountersContext();
  const { childrenCount, setChildrenCount } = useFilterCountersContext();

  const handleIncrement = (counter, setCounter, max) => (event) => {
    event.preventDefault();
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = (counter, setCounter, min) => (event) => {
    event.preventDefault();
    if (counter > min) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="desktop-form__filter filter desktop-form__filter--disabled">
      <ul className="filter__counters">
        <li className="filter__adults counter-item">
          <Label className="counter__label" htmlFor="counter-adults">
            Adults
          </Label>
          <Button
            variant="counter"
            onClick={handleDecrement(adults, setAdults, 1)}
            disabled={adults === 1}
          >
            -
          </Button>
          <Input
            className="counter__input"
            id="counter-adults"
            name="counter-adults"
            value={adults}
            disabled
          />
          <Button
            variant="counter"
            onClick={handleIncrement(adults, setAdults, 30)}
            disabled={adults === 30}
          >
            +
          </Button>
        </li>
        <li className="filter__children counter-item">
          <Label className="counter__label" htmlFor="counter-children">
            Children
          </Label>
          <Button
            variant="counter"
            onClick={handleDecrement(childrenCount, setChildrenCount, 0)}
            disabled={childrenCount === 0}
          >
            -
          </Button>
          <Input
            className="counter__input"
            id="counter-children"
            name="counter-children"
            value={childrenCount}
            disabled
          />
          <Button
            variant="counter"
            onClick={handleIncrement(childrenCount, setChildrenCount, 10)}
            disabled={childrenCount === 10}
          >
            +
          </Button>
        </li>
        <li className="filter__rooms counter-item">
          <Label className="counter__label" htmlFor="counter-rooms">
            Rooms
          </Label>
          <Button
            variant="counter"
            onClick={handleDecrement(rooms, setRooms, 1)}
            disabled={rooms === 1}
          >
            -
          </Button>
          <Input
            className="counter__input"
            id="counter-rooms"
            name="counter-rooms"
            value={rooms}
            disabled
          />
          <Button
            variant="counter"
            onClick={handleIncrement(rooms, setRooms, 30)}
            disabled={rooms === 30}
          >
            +
          </Button>
        </li>
      </ul>
      {childrenCount > 0 && (
        <div className="filter__children-info filter__children--disabled">
          <p className="filter__children-question">
            What is the age of the child you’re travelling with?
          </p>
        </div>
      )}
    </div>
  );
};
