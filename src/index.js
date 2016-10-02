import Request from './Request';
import StreamReader from './StreamReader';
import RequestError from './RequestError';
import ConnectionError from './ConnectionError';
import HTTPError from './HTTPError';
import ParseError from './ParseError';

/**
 * Default handler that creates a new client and executes it
 */
function handleRequest(method, url, options) {
  const request = new Request(method, url, options);

  return request.run();
}

export default {
  get: handleRequest.bind(null, 'GET'),
  put: handleRequest.bind(null, 'PUT'),
  post: handleRequest.bind(null, 'POST'),
  del: handleRequest.bind(null, 'DELETE'),
  Request,
  StreamReader,
  RequestError,
  ConnectionError,
  HTTPError,
  ParseError,
};
