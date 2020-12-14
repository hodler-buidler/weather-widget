import StorageInterface from './StorageInterface';
import LocalStorage from './implementations/LocalStorage';

export const LOCAL_STORAGE_TYPE = 'localStorage';
export const STORAGE_TYPES = [LOCAL_STORAGE_TYPE];

class Storage extends StorageInterface {
  constructor(storageType) {
    super();

    this[LOCAL_STORAGE_TYPE] = new LocalStorage();

    this.set(storageType || LOCAL_STORAGE_TYPE);
  }

  set(type) {
    if (STORAGE_TYPES.includes(type)) {
      this.storageType = type;
    } else {
      throw new Error(`The following storage type is not supported: ${type}`);
    }
  }

  setItem(key, value) {
    this[this.storageType].setItem(key, value);
  }

  getItem(key) {
    return this[this.storageType].getItem(key);
  }

  removeItem(key) {
    this[this.storageType].removeItem(key);
  }

  clear() {
    this[this.storageType].clear();
  }
}

export default Storage;
