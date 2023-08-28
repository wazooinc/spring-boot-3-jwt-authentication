
const baseURL = '/api/v1'

export const getFetch = async (url, token = '') => {
  let headers = {}
  console.log(url)
  console.log(`${baseURL}${url}`)

  if (token !== '') {
    headers.Authorization = `Bearer ${token}`
  }

  return fetch(`${baseURL}${url}`, {
    method: 'GET',
    headers: headers
  })
  .then(response => {
    if (response.ok) {
      return response.text()
    } else {
      if (response.status === 403) {
        return Promise.reject(new Error('invalid credentials and/or access level'))
      }
      
    }
  })
}

export const postFetch = async (url, payload = {}, token = '') => {

  const headers = {
    'Content-type': 'application/json'
  }

  if (token !== '') {
    headers.Authorization = `Bearer ${token}`
  }

  return fetch(`${baseURL}/${url}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: headers
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      if (response.status === 403) {
        return Promise.reject(new Error('invalid credentials and/or access level'))
      }
    }
  })
  //.catch(err => {
  //  return Promise.reject(new Error(err))
 // })

  /*
  .then(response => response.json())
  .then(json => {
    if (json?.data?.token) {
      dispatch(setter(json.data.token))
      //setResult(`token: ${json.data.token}`)
    }
    //return json
  })
  return res*/
}