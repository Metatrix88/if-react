import React from 'react';

import './FilterCountersContainer.scss';
import {Button} from '../UI/Button';
import {Input} from '../UI/Input';
import {Label} from '../UI/Label';

export const FilterCountersContainer = () => {
  return (
    <div
      className="desktop-form__filter filter desktop-form__filter--disabled"
    >
      <ul className="filter__counters">
        <li className="filter__adults counter-item">
          <Label className="counter__label" htmlFor="counter-adults">Adults</Label>
          <Button variant='counter'>-</Button>
          <Input
            className="counter__input"
            id="counter-adults"
            name="counter-adults"
            value="1"
            disabled
          />
          <Button variant='counter'>+</Button>
          {/*<label className="counter__label" htmlFor="counter-adults"*/}
          {/*>Adults</label*/}
          {/*>*/}
          {/*<button*/}
          {/*  type="button"*/}
          {/*  className="counter__button counter__button--minus counter__button-adults"*/}
          {/*>*/}
          {/*  -*/}
          {/*</button>*/}

          {/*<input*/}
          {/*  className="counter__input counter__input--adults"*/}
          {/*  id="counter-adults"*/}
          {/*  name="counter-adults"*/}
          {/*  type="text"*/}
          {/*  disabled*/}
          {/*  value="1"*/}
          {/*/>*/}

          {/*<button*/}
          {/*  type="button"*/}
          {/*  className="counter__button counter__button--plus counter__button-adults"*/}
          {/*>*/}
          {/*  +*/}
          {/*</button>*/}
        </li>
        <li className="filter__children counter-item">
          <Label className="counter__label" htmlFor="counter-children">Children</Label>
          <Button variant='counter'>-</Button>
          <Input
            className="counter__input"
            id="counter-children"
            name="counter-children"
            value="0"
            disabled
          />
          <Button variant='counter'>+</Button>
          {/*<label className="counter__label" htmlFor="counter-children"*/}
          {/*>Children</label*/}
          {/*>*/}
          {/*<button*/}
          {/*  type="button"*/}
          {/*  className="counter__button counter__button--minus counter__button-children"*/}
          {/*>*/}
          {/*  -*/}
          {/*</button>*/}

          {/*<input*/}
          {/*  className="counter__input counter__input--children"*/}
          {/*  id="counter-children"*/}
          {/*  name="counter-children"*/}
          {/*  type="text"*/}
          {/*  disabled*/}
          {/*  value="0"*/}
          {/*/>*/}

          {/*<button*/}
          {/*  type="button"*/}
          {/*  className="counter__button counter__button--plus counter__button-children"*/}
          {/*>*/}
          {/*  +*/}
          {/*</button>*/}
        </li>
        <li className="filter__rooms counter-item">
          <Label className="counter__label" htmlFor="counter-rooms">Rooms</Label>
          <Button variant='counter'>-</Button>
          <Input
            className="counter__input"
            id="counter-rooms"
            name="counter-rooms"
            value="1"
            disabled
          />
          <Button variant='counter'>+</Button>
          {/*<label className="counter__label" htmlFor="counter-rooms"*/}
          {/*>Rooms</label*/}
          {/*>*/}
          {/*<button*/}
          {/*  type="button"*/}
          {/*  className="counter__button counter__button--minus counter__button-rooms"*/}
          {/*>*/}
          {/*  -*/}
          {/*</button>*/}

          {/*<input*/}
          {/*  className="counter__input counter__input--rooms"*/}
          {/*  id="counter-rooms"*/}
          {/*  name="counter-rooms"*/}
          {/*  type="text"*/}
          {/*  disabled*/}
          {/*  value="1"*/}
          {/*/>*/}

          {/*<button*/}
          {/*  type="button"*/}
          {/*  className="counter__button counter__button--plus counter__button-rooms"*/}
          {/*>*/}
          {/*  +*/}
          {/*</button>*/}
        </li>
      </ul>

      <div className="filter__children-info filter__children--disabled">
        <p className="filter__children-question">
          What is the age of the child you’re travelling with?
        </p>
      </div>
    </div>
  )
};