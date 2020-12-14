function key(givenKey, prefixId = '', separator = '__') {
  if (prefixId) {
    return `${prefixId}${separator}${givenKey}`;
  }

  return givenKey;
}

export default key;
