import "./App.css"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { bootstrapLogin } from "./store/user/actions"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  useEffect(() => {
    if (token) {
      dispatch(bootstrapLogin(token))
    }
  })

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
