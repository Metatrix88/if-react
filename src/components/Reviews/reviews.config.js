import ubudBaliHotel from '../../images/reviews/ubudBali.jpg';
import rokokoHotel from '../../images/reviews/rokokoHotel.jpg';
import kingKongHotel from '../../images/reviews/kingKong.jpg';
import { FlagUA, Reviewer, FlagDE, FlagUSA } from '../../icons';

export const review = [
  {
    id: 1,
    imageUrl: ubudBaliHotel,
    name: 'ubud-bali-hotel',
    price: 250,
    nameHotel: 'Ubud Bali Resort&SPA',
    cityHotel: 'Bali',
    countryHotel: 'Indonesia',
    rating: '9,4',
    countReviews: 1324,
    avatarReviewer: <Reviewer />,
    nameReviewer: 'Hanna Ivanova',
    countyReviewer: 'Ukraine',
    flagSvg: <FlagUA />,
    comment:
      'Great location, really pleasant and clean rooms, but the thing\n' +
      'that makes this such a good place to stay are the staff. All of\n' +
      'the people are incredibly helpful and generous with their time\n' +
      'and advice.',
  },
  {
    id: 2,
    imageUrl: kingKongHotel,
    name: 'king-kong-hotel',
    price: 40,
    nameHotel: 'King Kong Hostel',
    cityHotel: 'Rotterdam',
    countryHotel: 'Netherlands',
    rating: '8,9',
    countReviews: 2016,
    avatarReviewer: <Reviewer />,
    nameReviewer: 'Adam Smith',
    countyReviewer: 'USA',
    flagSvg: <FlagUSA />,
    comment:
      "I've been in this hostel for a month and here is the best hostel of all\n" +
      "Excellent management of excellent and ethical staff and bedrooms Bathrooms are always clean and excellent\n" +
      "Most importantly, those who work here are kind and good-natured.",
  },
  {
    id: 3,
    imageUrl: rokokoHotel,
    name: 'rokoko-hotel',
    price: 100,
    nameHotel: 'Rokoko Hotel',
    cityHotel: 'Ourika',
    countryHotel: 'Morocco',
    rating: '9,1',
    countReviews: '815',
    avatarReviewer: <Reviewer />,
    nameReviewer: 'Anika Messer',
    countyReviewer: 'Germany',
    flagSvg: <FlagDE />,
    comment:
      'Efficient, friendly, professional, and appropriately attentive.\n' +
      'Great hotel in a great location. Easy access to all the\n' +
      'surrounding historical sites. Staff is fantastic. Will\n' +
      'definitely stay at this location during my next stay in Marocco.',
  },
];
