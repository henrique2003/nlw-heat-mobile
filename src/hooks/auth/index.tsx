import React, { createContext, useContext, useState, useEffect } from 'react'
import * as AuthSession from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { IAuthContextData, IUser, IAuthorizationResponse, IApiAuthResponse } from './types'
import { api } from '../../services/api'
import { setAsyncStorage } from '../../utils/async-storage'

const CLIENT_ID = '015571c26281b97e2755'
const SCOPE = 'read:user'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const AuthContext = createContext({} as IAuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [isSignIn, setIsSignIn] = useState<boolean>(true)
  const [isLogged, setIsLogged] = useState<boolean>(false)

  const signInUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`

  async function signIn (): Promise<void> {
    setIsSignIn(true)

    const { params, type } = await AuthSession.startAsync({ authUrl: signInUrl }) as IAuthorizationResponse

    if (type !== 'success' ?? !params.code ?? params.error === 'access_denied') {
      setIsSignIn(false)
    }

    const { data: { user, token } } = await api.post<IApiAuthResponse>('/authenticate', {
      code: params.code
    })
    api.defaults.headers.common.authorization = `Bearer ${token}`

    setAsyncStorage('@nlw6:user', user)
    setAsyncStorage('@nlw6:token', token)

    setUser(user)
    setIsLogged(true)
    setIsSignIn(false)
  }

  async function signOut (): Promise<void> {
    setUser(null)
    setIsLogged(false)

    await AsyncStorage.removeItem('@nlw6:user')
    await AsyncStorage.removeItem('@nlw6:token')
  }

  useEffect(() => {
    async function loadUser (): Promise<void> {
      const userStorage = await AsyncStorage.getItem('@nlw6:user')
      const tokenStorage = await AsyncStorage.getItem('@nlw6:token')

      if (userStorage && tokenStorage) {
        setUser(JSON.parse(userStorage))
        setIsLogged(true)
      }

      setIsSignIn(false)
    }

    loadUser()
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user,
      isLogged,
      isSignIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth (): IAuthContextData {
  const context = useContext(AuthContext)

  return context
}
