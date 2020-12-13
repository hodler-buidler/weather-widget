function implodeTruthy(separator, ...values) {
  let result = '';

  values.forEach((item, index) => {
    if (item) {
      result = index ? `${result}${separator}${item}` : item;
    }
  });

  return result;
}

export default implodeTruthy;
