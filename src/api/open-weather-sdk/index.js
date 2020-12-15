import http from './http';
import Response from '../Response';
import { RequestError } from '../RequestError';

import makeIconPath from './related/makeIconPath';
import GetWeatherDataByCityName from './requests/GetWeatherDataByCityName';

const DEPENDENCIES = { http, Response, RequestError };

const OpenWeatherSdk = {
  makeIconPath,
  weather: {
    byCityName: GetWeatherDataByCityName(DEPENDENCIES),
  },
};

export default OpenWeatherSdk;
