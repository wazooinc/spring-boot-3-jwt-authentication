import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setter } from './tokenSlice'

const SignUp = () => {
  const token = useSelector((state) => state.token.value)
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    //const baseURL = '/api/v1'

    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    const res = await postFetch('/signup', payload)
      .catch(err => {
        console.log(err)
        if (err.message) {
          setResult(err.message)
        }
      })
    console.log('res', res)


    /*
    fetch(`${baseURL}/signup`, {
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
      <h3>Sign Up!</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type='submit'>Sign Up</button>
      </form>
      <h3>Result</h3>
      <div>{result}</div>

      <h3>Token</h3>
      <div><pre>{token}</pre></div>
      <Link to={`/`}>Home</Link>
    </div>
  )
}

export default SignUp