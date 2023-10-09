import React, { Component } from 'react';

import { Sprite } from '../Sprite';
import { Homes } from '../HomesClass';
import { TopSection } from '../TopSectionClass';
import { Available } from '../AvailableClass';

import './App.scss';

import { getHotels } from '../../services/hotels';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
    this.updateAvailableHotels = this.updateAvailableHotels.bind(this);
  }

  componentDidMount() {
    getHotels().then((hotels) => this.setState({ hotels }));
  }

  updateAvailableHotels(newHotels) {
    this.setState({
      hotels: newHotels,
    });
  }

  render() {
    const { hotels } = this.state;
    console.log(2, hotels);

    return (
      <>
        <Sprite />
        <TopSection searchHotels={this.updateAvailableHotels} />
        <Available hotels={hotels} />
        <Homes />
      </>
    );
  }
}
