import React, { Component } from 'react';

//Components
import { Input } from '../../../UI/Input';
import { Label } from '../../../UI/Label';
import { Button } from '../../../UI/Button';

//Styles
import './FormDesktop.scss';
import { updateAvailableHotels } from '../../../../services/hotels';

export class FormDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCity: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    if (event.target.name === 'city') {
      this.setState({ inputCity: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const valCityInput = this.state.inputCity;
    updateAvailableHotels(valCityInput).then((res) => {
      this.props.searchHotels(res);
    });
    this.setState({ inputCity: '' });
  }

  render() {
    const { inputCity } = this.state;
    return (
      <form
        className="lg-4-col search-form--desktop desktop-form"
        onSubmit={this.handleSubmit}
      >
        <div className="desktop-form__input">
          <Input
            id="city"
            className="desktop-form__input-city"
            name="city"
            title="Your destination or hotel name"
            placeholder=""
            value={inputCity}
            onChange={this.handleChange}
            required
          />
          <Label htmlFor="city">Your destination or hotel name</Label>
        </div>
        <div className="desktop-form__input">
          <Input
            id="date"
            className="desktop-form__input-date"
            name="date"
            title="Check-in — Check-out"
            placeholder=""
            onChange={this.handleChange}
          />
          <Label htmlFor="date">Check-in — Check-ou</Label>
        </div>
        <div className="desktop-form__input">
          <Input
            id="filter"
            className="desktop-form__input-city"
            name="filter"
            title="2 Adults — 0 Children — 1 Room"
            placeholder="2 Adults — 0 Children — 1 Room"
            onChange={this.handleChange}
          />
          <Label className="visually-hidden" htmlFor="filter">
            2 Adults — 0 Children — 1 Room
          </Label>
        </div>
        <Button
          className="desktop-form__button-search"
          color="primary"
          type="submit"
        >
          Search
        </Button>
      </form>
    );
  }
}
