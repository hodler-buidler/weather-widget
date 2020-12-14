/* eslint-disable no-unused-vars */

class StorageInterface {
  setItem(key, value) {
    throw new Error('This method is abstract and demands implementation');
  }

  getItem(key) {
    throw new Error('This method is abstract and demands implementation');
  }

  removeItem(key) {
    throw new Error('This method is abstract and demands implementation');
  }

  clear() {
    throw new Error('This method is abstract and demands implementation');
  }
}

export default StorageInterface;
