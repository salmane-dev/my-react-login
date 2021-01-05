import React, { useEffect, useState } from "react"
import Axios from "axios"

function Login(props) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [login, setLogin] = useState("")

  async function handleSubmit(e) {
  
    e.preventDefault()
    //to use the live heroku server
    //const response = await Axios.post("https://my-react-login.herokuapp.com/login", { username, password })
    
    const response = await Axios.post("/api/login", { username, password })
    setLogin(response.data) 
    }

  if (login.status === "success") { 
    localStorage.setItem("Token", login.token) 
    props.handler() 
    return (
      <div className="py-5 text-center">
        <h1>{login.message} </h1>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        {login.status === "failure" && <div className="alert text-danger">That is incorrect. Try again.</div>}
        <label for="exampleInputEmail1" className="form-label">
          Username 
        </label>
        <input onChange={e => setUsername(e.target.value)}
              type="text"
              autoComplete="off" 
              className="form-control w-50"
              style={{inlinecss}} 
              id="exampleInputEmail1" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password 
        </label>
        <input onChange={e => setPassword(e.target.value)} type="password" className="form-control w-50" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

const inlinecss="minWith:400px"

export default Login
