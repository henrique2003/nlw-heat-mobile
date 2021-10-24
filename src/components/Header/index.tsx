import React from 'react'

import { Container, LogoutContainer, TextWithOut } from './styles'
import { logo as Logo } from '../../assets'
import { TouchableOpacity } from 'react-native'
import { UserAvatar } from '../index'
import { useAuth } from '../../hooks/auth'

export const Header: React.FC = () => {
  const { user, signOut, isLogged } = useAuth()

  return (
    <Container>
      <Logo />
      <LogoutContainer>
        {isLogged && (
          <TouchableOpacity>
            <TextWithOut onPress={signOut}>Sair</TextWithOut>
          </TouchableOpacity>
        )}
        <UserAvatar url={user?.avatar_url} size="normal" />
      </LogoutContainer>
    </Container>
  )
}
