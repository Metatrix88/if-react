export const filteredHotels = (arr, str) => {
  const strLowerCase = str.toLowerCase();

  const hotels = arr.filter(({ name, city, country }) => {
    const nameLowerCase = name.toLowerCase();
    const cityLowerCase = city.toLowerCase();
    const countryLowerCase = country.toLowerCase();
    return (
      nameLowerCase.includes(strLowerCase) ||
      cityLowerCase.includes(strLowerCase) ||
      countryLowerCase.includes(strLowerCase)
    );
  });

  return hotels;
}