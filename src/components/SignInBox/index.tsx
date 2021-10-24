import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import { Button } from '../index'
import { Container } from './styles'
import { useAuth } from '../../hooks/auth'

export const SignInBox: React.FC = () => {
  const { signIn, isSignIn } = useAuth()

  return (
    <Container>
      <Button
        title='ENTRAR COM O GITHUB'
        bgColor="yellow"
        color="black"
        onPress={signIn}
        isLoading={isSignIn}
      >
        <AntDesign size={24} name="github" />
      </Button>
    </Container>
  )
}
