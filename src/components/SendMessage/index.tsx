import React, { useState } from 'react'
import { Alert, Keyboard } from 'react-native'

import { Button } from '../index'
import { Container, InputMessage } from './styles'
import { api } from '../../services/api'

export const SendMessage: React.FC = () => {
  const [message, setMessage] = useState<string>('')
  const [sendingMessage, setSendingMessage] = useState<boolean>(false)

  async function registerMessage (): Promise<void> {
    setSendingMessage(true)

    if (!message.trim()) {
      Alert.alert('Escreva algo para enviar a mensagem')
      return
    }

    await api.post('/message', {
      text: message
    })

    setMessage('')
    Keyboard.dismiss()
    setSendingMessage(false)
  }

  return (
    <Container>
      <InputMessage
        placeholder="Digite sua mensagem aqui"
        keyboardAppearance="dark"
        multiline
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
      />
      <Button
        bgColor="pink"
        color="white"
        title="ENVIAR MENSAGEM"
        onPress={registerMessage}
      />
    </Container>
  )
}
