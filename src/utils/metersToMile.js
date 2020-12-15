import { round } from 'lodash';

function metersToMile(meters, precision = 2) {
  return round(meters * 0.000621371, precision);
}

export default metersToMile;
