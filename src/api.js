const fetch = window.fetch
const domain = "http://localhost:3000"

const defaultHeaders = {
  'Content-Type': 'application/json',
  'guard': 'request-no-cors'
}

const errorResponse = (res) => {
  return res.json().then((json) => {
    return Promise.reject(json)
  })
}

const request = (path, options) => {
  const headers = Object.assign({}, defaultHeaders, options.headers || {})
  delete options.headers

  return fetch(domain + path, Object.assign({}, { headers }, options))
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
  },
  login: (params) => {
    const path = '/api/users/auth/login'
    return post(path, { body: JSON.stringify(params) })
  }
}

const userActions = {
  create: (params, auth) => {
    const path = '/api/user-actions'
    return post(path, {
      body: JSON.stringify(params),
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    })
  }
}

const actions = {
  list: (auth) => {
    const path = '/api/actions'
    return get(path, {
      headers: {
        'Authorization': `Bearer ${auth && auth.token}`
      }
    })
  }
}

const issues = {
  list: (auth) => {
    const path = '/api/issues'
    return get(path, {
      headers: {
        'Authorization': `Bearer ${auth && auth.token}`
      }
    })
  }
}

export default {
  get,
  post,
  put,
  patch,
  del,
  congress,
  auth,
  userActions,
  actions,
  issues
}
