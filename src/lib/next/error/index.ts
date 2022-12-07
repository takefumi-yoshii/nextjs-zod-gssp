export class HttpError extends Error {
  statusCode = -1;
}

export class ValidationError extends HttpError {
  statusCode = 400;
}

export class UnauthorizedError extends HttpError {
  statusCode = 401;
}

export class NotFoundError extends HttpError {
  statusCode = 404;
}

export class MethodNotAllowedError extends HttpError {
  statusCode = 405;
}

export class InternalServerError extends HttpError {
  statusCode = 500;
}
