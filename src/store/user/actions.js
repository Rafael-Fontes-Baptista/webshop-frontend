import axios from "axios"

export const logout = () => ({ type: "user/LOGOUT" })
export const setUser = (profile, token) => ({
  type: "user/SET_USER",
  payload: {
    profile,
    token,
  },
})

export const loginUser = (user, history) => async (dispatch, getState) => {
  try {
    const API_URL = "https://codaisseur-coders-network.herokuapp.com"

    const getToken = await axios.post(`${API_URL}/login`, {
      email: user.email,
      password: user.password,
    })

    const token = getToken.data.jwt

    dispatch(bootstrapLogin(token))

    localStorage.setItem("token", token)
    history.push("/")
  } catch (e) {
    console.log(e)
  }
}

export const signupUser = (user, history) => async (dispatch, getState) => {
  try {
    const API_URL = "https://codaisseur-coders-network.herokuapp.com"

    await axios.post(`${API_URL}/signup`, {
      name: user.name,
      email: user.email,
      password: user.password,
    })

    dispatch(loginUser(user, history))
  } catch (e) {
    console.log(e)
  }
}

export const bootstrapLogin = (token) => async (dispatch, getState) => {
  try {
    const API_URL = "https://codaisseur-coders-network.herokuapp.com"

    const getProfile = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const profile = getProfile.data

    dispatch(setUser(profile, token))
  } catch (e) {
    console.log(e.message)
  }
}
