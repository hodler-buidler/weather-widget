function findLocationIndex(location, locationsArray) {
  return locationsArray.findIndex(({ city, countryCode }) => {
    return city === location.city && countryCode === location.countryCode;
  });
}

export default findLocationIndex;
