import implodeTruthy from '../../utils/implodeTruthy';

function GetWeatherDataByCityName({ http, Response, RequestError }) {
  /**
   * @param {string} city Required, name of city to search by
   * @param {string|number} stateCode Optional
   * @param {string} countryCode Optional ALPHA-2 country code
   * @param {string} units Optional. Units of measurement: standard(default), metric and imperial.
   * @param {string} lang Optional ALPHA-2 locale
   */
  return async function request({ city, stateCode, countryCode, units, lang }) {
    const q = implodeTruthy(',', city, stateCode, countryCode);

    try {
      const response = await http.get('/weather', {
        params: { q, units, lang },
      });
      return Response.make(response);
    } catch (error) {
      throw RequestError.default(error);
    }
  };
}

export default GetWeatherDataByCityName;
