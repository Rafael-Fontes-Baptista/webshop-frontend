import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginUser } from "../store/user/actions"
import "./pages.css"

export default function LoginPage() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
  }

  const submitLogin = (e) => {
    e.preventDefault()
    dispatch(loginUser(user, history))
    setUser({
      email: "",
      password: "",
    })
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form className="Form" onSubmit={submitLogin}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={user.email}
            className="form-control"
            placeholder="Email..."
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={user.password}
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  )
}
