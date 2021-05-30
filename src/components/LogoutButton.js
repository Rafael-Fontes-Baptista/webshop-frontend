import React from "react"
import { useDispatch } from "react-redux"
import { logout } from "../store/user/actions"

export default function LogoutButton() {
  const dispatch = useDispatch()

  return (
    <div>
      <button
        className="btn btn-outline-info"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  )
}
