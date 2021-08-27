import {useLocalStorage} from 'react-use-storage'
import {SigninInfo, User} from "../generated/graphql";
import Cookies from 'js-cookie'
import cookies from "next-cookies";

export const scopeKey = 'authState'
export function useAuthState() {
  const [user, setUser, removeUser] = useLocalStorage<User>(`${scopeKey}.user`)

  const setSigninInfo = (signin: SigninInfo) => {
    Cookies.set(`${scopeKey}.token`, signin.token)
    setUser(signin.user)
  }

  const removeSigninInfo = () => {
    Cookies.remove(`${scopeKey}.token`)
    removeUser()
  }

  return {
    user,
    setSigninInfo,
    removeSigninInfo,
  }
}

/**
 * retrieves the token on the cookies (tries to get from the context before using the browser
 * @param ctx Next context
 */
export function getToken(ctx) {
  const tokenKey = `${scopeKey}.token`
  return ctx ? cookies(ctx)[tokenKey] : Cookies.get(tokenKey)
}
