function makeLocation(data) {
  if (!data.hasOwnProperty('city')) {
    throw new Error(
      `Location entity must be supplied with city: ${data.city} given`,
    );
  }

  if (!data.hasOwnProperty('countryCode')) {
    throw new Error(
      `Location entity must be supplied with countryCode: ${data.countryCode} given`,
    );
  }

  return {
    city: data.city.toLowerCase(),
    countryCode: data.countryCode.toLowerCase(),
  };
}

export default makeLocation;
