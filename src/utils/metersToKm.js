import { round } from 'lodash';

function metersToKm(meters, precision = 1) {
  return round(meters / 1000, precision);
}

export default metersToKm;
