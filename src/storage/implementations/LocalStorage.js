import StorageInterface from '../StorageInterface';

class LocalStorage extends StorageInterface {
  setItem(key, value) {
    window.localStorage.setItem(key, value);
  }

  getItem(key) {
    return window.localStorage.getItem(key);
  }

  removeItem(key) {
    window.localStorage.removeItem(key);
  }

  clear() {
    window.localStorage.clear();
  }
}

export default LocalStorage;
