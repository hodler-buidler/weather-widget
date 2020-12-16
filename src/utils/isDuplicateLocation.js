function isDuplicateLocation(location, locationsArray) {
  const duplicate = locationsArray.find(({ city, countryCode }) => {
    return city === location.city && countryCode === location.countryCode;
  });

  return !!duplicate;
}

export default isDuplicateLocation;
