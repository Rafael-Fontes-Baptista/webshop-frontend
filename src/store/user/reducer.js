const initialState = {
  profile: "",
  token: "",
}

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "user/SET_USER": {
      return {
        ...state,
        profile: action.payload.profile,
        token: action.payload.token,
      }
    }
    case "user/LOGOUT": {
      localStorage.removeItem("token")
      return {
        initialState,
      }
    }
    default: {
      return state
    }
  }
}
