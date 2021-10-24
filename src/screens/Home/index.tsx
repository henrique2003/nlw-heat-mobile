import React from 'react'

import { Header, MessageList, SendMessage, SignInBox } from '../../components'
import { Container } from './styles'
import { useAuth } from '../../hooks/auth/index'

const Home: React.FC = () => {
  const { isLogged } = useAuth()

  return (
    <Container>
      <Header />
      <MessageList />
      {isLogged ? <SendMessage /> : <SignInBox />}
    </Container>
  )
}

export default Home
