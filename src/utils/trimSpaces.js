function trimSpaces(value) {
  let result = value;
  result = result.replace(/\s\s+/g, ' ');
  result = result.replace(/^\s/g, '');
  return result;
}

export default trimSpaces;
