import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

import { Message } from './Message'
import { IMessage } from './Message/interfaces'
import { Container } from './styles'
import { api } from '../../services/api'
import { IMessageResponse } from './interfaces'

const socket = io(String(api.defaults.baseURL))

const messagesQueue: IMessage[] = []

socket.on('new_message', (newMessage) => {
  messagesQueue.push(newMessage)
})

export const MessageList: React.FC = () => {
  const [messages, setMessage] = useState<IMessage[]>([])

  useEffect(() => {
    async function loadMessages (): Promise<void> {
      const resMessages = await api.get<IMessageResponse>('/last/messages')

      setMessage(resMessages.data)
    }

    loadMessages()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessage((prevState) => (
          [messagesQueue[0], prevState[0], prevState[1]]
        ))

        messagesQueue.shift()
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [messagesQueue])

  return (
    <Container>
      {messages.length > 0 && messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </Container>
  )
}
