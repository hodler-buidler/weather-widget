function GetExampleRequest({ http, Response, RequestError }) {
  // May prefer using destructuring instead of params
  return async function request(params = {}) {
    try {
      const response = await http.get('/your-uri-or-whatever', {
        params,
      });

      // Default Response factory
      return Response.make(response);
    } catch (error) {
      // Default Error factory
      throw RequestError.default(error);
    }
  };
}

export default GetExampleRequest;
