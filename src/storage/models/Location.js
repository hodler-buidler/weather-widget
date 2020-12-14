import Model from './Model';
import key from '../utils/key';

export const LOCATIONS_KEY = 'locations';

class Location extends Model {
  constructor(storage, instanceId) {
    super(storage, instanceId);
    this.locationsKey = key(LOCATIONS_KEY, instanceId);
  }

  getAll() {
    let cachedLocations = this.storage.getItem(this.locationsKey);

    if (cachedLocations) {
      cachedLocations = JSON.parse(cachedLocations);
    }

    return cachedLocations;
  }

  setAll(locations) {
    const serializedLocations = JSON.stringify(locations);
    this.storage.setItem(this.locationsKey, serializedLocations);
  }
}

export default Location;
