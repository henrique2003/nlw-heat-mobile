export interface IAuthContextData {
  user: IUser | null
  isLogged: boolean
  isSignIn: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

export interface IUser {
  id: string
  name: string
  github_id: number
  avatar_url: string
  login: string
}

export interface IAuthResponse {
  token: string
  user: IUser
}

export interface IAuthorizationResponse {
  params: {
    code?: string
    error?: string
  }
  type?: string
}

export interface IApiAuthResponse {
  user: IUser
  token: string
}
