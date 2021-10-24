import { IUser } from '../../../hooks/auth/types'

export interface IMessage {
  id: string
  text: string
  created_at: string
  user_id: string
  user: IUser
}
