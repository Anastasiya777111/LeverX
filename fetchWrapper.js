function createFetchWrapper(method) {
    const defaultOptions = { method };
    return function wrapper(url, options) {
      options || (options = {});
      return fetch(url, Object.assign(options, defaultOptions));
    };
  }
  
  fetch.put = createFetchWrapper('PUT');
  fetch.get = createFetchWrapper('GET');
  fetch.post = createFetchWrapper('POST');