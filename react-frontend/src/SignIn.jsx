import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setter } from './tokenSlice'
import { postFetch } from './network'

const SignIn = () => {
  const token = useSelector((state) => state.token.value)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    //const baseURL = '/api/v1'

    const payload = {
      email: email,
      password: password
    }

    const res = await postFetch('/signin', payload)
      .catch(err => {
        console.log(err)
        if (err.message) {
          setResult(err.message)
        }
      })
    
    if (res?.token) {
      dispatch(setter(res.token))
      setResult(`token: ${res.token}`)
    }

    /*
    fetch(`${baseURL}/signin`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-type': 'application/json'}
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      if (json?.data?.token) {
        dispatch(setter(json.data.token))
        setResult(`token: ${json.data.token}`)
      }

    })
    .catch(err => {
      console.log(err)
      if (err.message) {
        setResult(err.message)
      }
    })*/

  }

  return (
    <div>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
      <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type='submit'>Sign In</button>
      </form>
      <h3>Result</h3>
      <div>{result}</div>

      <h3>Token</h3>
      <div><pre>{token}</pre></div>
      <Link to={`/`}>Home</Link>
    </div>
  )
}

export default SignIn