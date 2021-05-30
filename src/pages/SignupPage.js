import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { signupUser } from "../store/user/actions"
import "./pages.css"

export default function SignupPage() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [user, setUser] = useState({
    name: "",
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

  const submitSigup = (e) => {
    e.preventDefault()

    dispatch(signupUser(user, history))
    setUser({
      name: "",
      email: "",
      password: "",
    })
  }

  return (
    <div>
      <h1>Sign Up Page</h1>
      <form className="Form" onSubmit={submitSigup}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={user.name}
            className="form-control"
            placeholder="Name"
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={user.email}
            className="form-control"
            placeholder="Email"
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
        <button type="submit" class="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  )
}
