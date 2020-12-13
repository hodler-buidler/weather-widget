import http from './http';
import Response from '../Response';
import { RequestError } from '../RequestError';

import GetWeatherDataByCityName from './requests/GetWeatherDataByCityName';

const DEPENDENCIES = { http, Response, RequestError };

const OpenWeatherSdk = {
  weather: {
    byCityName: GetWeatherDataByCityName(DEPENDENCIES),
  },
};

export default OpenWeatherSdk;
