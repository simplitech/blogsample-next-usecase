import {useLocalStorage} from 'react-use-storage'
import {SigninResp, User} from "../generated/graphql";

const scopeKey = '@authState'
export function useAuthState() {
  const [token, setToken, removeToken] = useLocalStorage<string>(`${scopeKey}.token`)
  const [user, setUser, removeUser] = useLocalStorage<User>(`${scopeKey}.user`)

  const setSigninInfo = (signin: SigninResp) => {
    setToken(signin.token)
    setUser(signin.user)
  }

  const removeSigninInfo = () => {
    removeToken()
    removeUser()
  }

  return {
    token,
    setToken,
    removeToken,
    user,
    setUser,
    removeUser,
    setSigninInfo,
    removeSigninInfo,
  }
}
