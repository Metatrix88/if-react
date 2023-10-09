import React, {Component} from 'react';

//Components
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';
import { Button } from '../UI/Button';

//Styles
import './FormDesktop.scss';
import {searchHotel} from '../../services/hotels';

// import { homes } from '../Homes/config';
// import { filteredHotels } from '../../assets/filter';

export class FormDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCity: '',
    }
    console.log(3, this.props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    if (event.target.name === 'city') {
      this.setState({inputCity: event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchHotels([{id: 'aa560608-a879-48a7-80b6-deff2806b250', name: 'Apartment Sunshine', city: 'Santa  Cruz de Tenerife', country: 'Spain', imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg'},
    {id: 'a2bf824d-edd8-41f0-8b70-244334086ab4', name: 'Hostel Friendship', city: 'Berlin', country: 'Germany', imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg'},
    {id: '15706be7-2e4f-4ea7-8698-3cfab390e733', name: 'San Firenze Suites', city: 'Florence', country: 'Italy', imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612356595/fe/san-firenze_sq4lhr.jpg'},
    {id: '34ab0b18-3111-4887-8237-b31c7c976891', name: 'Ponta Mar Hotel', city: 'Fortaleza', country: 'Brazil', imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612301867/fe/ponta-mar_apr3os.jpg'},
    {id: '299c5ecb-3089-46e9-a38c-aa552fd9bcd9', name: 'Le Meridien', city: 'Nice', country: 'France', imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1612302207/fe/le-meridien_zcobql.jpg'}])
    const valCityInput = this.state.inputCity;
    searchHotel(valCityInput).then((res) => {
      console.log(1, res)
    })
    this.setState({inputCity: ''})
  }

  render() {
    const {inputCity} = this.state;
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
