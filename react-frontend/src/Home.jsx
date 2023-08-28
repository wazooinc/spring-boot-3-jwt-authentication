import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getFetch } from './network'

const Home = () => {
  const token = useSelector((state) => state.token.value)
  const [testType, setTestType] = useState('anon')
  const [result, setResult] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    //const baseURL = '/api/v1/test'
    //console.log('form submit')
    //console.log(testType)

    getFetch(`/test/${testType}`, token)
    .then(res => {
      console.log('res', res)
      setResult(res)
    })
    .catch(err => {
        console.error(err)
        if (err.message) {
          setResult(err.message)
        }
      })


    
    /*

    const headers = {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }

    fetch(`${baseURL}/${testType}`, {
      method: 'GET',
      headers: headers
    })
    .then(response => response.text())
    .then(text => {
      console.log(text)
      setTestResult(text)
    })
    .catch(err => {
      if (err.message) {
        setTestResult(err.message)
      }
    })*/

  }

  
  return (
    <div>
      <h1>React JWT Authentication Tester</h1>
      <div className="card mt-5 mb-5 p-2">
        <ul>
          <li>
            <Link to={`/signin`}>Sign In</Link>
          </li>
          <li>
            <Link to={`/signup`}>Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className="card mt-5 mb-5 p-2">
        <h3>JWT Token</h3>
        <div>
          Token: {token}
        </div>
      </div>
      <div className="card mt-5 mb-5 p-2">
      <h3>Testing Links</h3>
      <form onSubmit={handleSubmit}>
        <select className="form-select" aria-label="Default select example" value={testType} onChange={((val) => setTestType(val.target.value))}>
          <option value="anon">Anonymous (/api/v1/test/anon)</option>
          <option value="admins">Admins (/api/v1/test/admins)</option>
          <option value="users">Users (/api/v1/test/users)</option>
        </select>
        <button className="btn btn-primary" type="submit">Test!</button>
      </form>
      </div>
      <div className="card mt-5 mb-5 p-2">
        <h3>Testing Result</h3>
        <div>
          <pre>
            {result}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Home