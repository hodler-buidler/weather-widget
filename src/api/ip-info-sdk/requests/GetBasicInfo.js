function GetBasicInfo({ http, Response, RequestError }) {
  return async function request({ ip = '' } = {}) {
    try {
      const response = await http.get(`/${ip}`);
      return Response.make(response);
    } catch (error) {
      throw RequestError.default(error);
    }
  };
}

export default GetBasicInfo;
