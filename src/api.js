const fetch = window.fetch
const domain = "http://localhost:3000"

const request = (path, options) => {
  const defaults = {
    headers: {
      'Content-Type': 'application/json',
      'guard': 'request-no-cors'
    }
  }

  return fetch(domain + path, Object.assign(defaults, options))
}

const get = (path, options) => {
  return request(path, Object.assign({ method: 'GET' }, options))
}

const post = (path, options) => (
  request(path, Object.assign({ method: 'POST' }, options))
)

const put = (path, options) => (
  request(path, Object.assign({ method: 'PUT' }, options))
)

const patch = (path, options) => (
  request(path, Object.assign({ method: 'PATCH' }, options))
)

const del = (path, options) => (
  request(path, Object.assign({ method: 'DELETE' }, options))
)

const congress = {
  get: () => ( get('/api/congress') )
}

export default {
  get,
  post,
  put,
  patch,
  del,
  congress
}
