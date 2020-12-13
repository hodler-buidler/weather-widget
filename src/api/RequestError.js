export const UNEXPECTED_ERROR_STATUS = 0;
export const NOT_FOUND_ERROR_STATUS = 1;

export const RequestError = {
  default({ response }) {
    if (response.status === 404) return this.notFound();
    return this.unexpected();
  },

  notFound() {
    return this.makeError({
      status: NOT_FOUND_ERROR_STATUS,
      message: 'Requested resource is not found',
    });
  },

  unexpected() {
    return this.makeError({
      status: UNEXPECTED_ERROR_STATUS,
      message: 'Unexpected error occurred, check your network connection',
    });
  },

  makeError(errorDetails) {
    if (typeof errorDetails !== 'object') {
      throw new Error(
        `RequestError body must be an object: ${errorDetails} given`,
      );
    }

    if (!errorDetails.hasOwnProperty('status')) {
      throw new Error(
        `RequestError must contain status property: ${errorDetails.status} given`,
      );
    }

    if (!errorDetails.hasOwnProperty('message')) {
      throw new Error(
        `RequestError must contain message property: ${errorDetails.message} given`,
      );
    }

    return errorDetails;
  },
};
