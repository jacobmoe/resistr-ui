const fetch = window.fetch
const domain = "http://localhost:3000"

const errorResponse = (res) => {
  return res.json().then((json) => {
    return Promise.reject(json)
  })
}

const request = (path, options) => {
  const defaults = {
    headers: {
      'Content-Type': 'application/json',
      'guard': 'request-no-cors'
    }
  }

  return fetch(domain + path, Object.assign(defaults, options))
    .catch(err => {
      return Promise.reject({error: 'Network error'})
    })
    .then((response) => {
      switch (response.status) {
      case 400:
        return errorResponse(response)
        break;
      case 401:
        return errorResponse(response)
        break;
      default:
      }

      return response.json()
    })
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

const auth = {
  register: (params) => {
    const path = '/api/users/auth/register'

    return post(path, { body: JSON.stringify(params) })
  }
}

export default {
  get,
  post,
  put,
  patch,
  del,
  congress,
  auth
}
