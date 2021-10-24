import React from 'react'

import { Container, Subtitle, TextMessage, UserContainer } from './styles'
import { UserAvatar } from '../../UserAvatar/index'
import { IMessage } from './interfaces'

export interface IMessageProps {
  message: IMessage
}

export const Message: React.FC<IMessageProps> = ({ message }) => {
  return (
    <Container>
      <TextMessage>{message.text}</TextMessage>
      <UserContainer>
        <UserAvatar url={message.user.avatar_url} size="small" />
        <Subtitle>{message.user.name}</Subtitle>
      </UserContainer>
    </Container>
  )
}
