import React from 'react'
import { Image } from 'react-native'

import { avatar } from '../../assets'
import { Container, ImageAvatar } from './styles'

interface IUserAvatarProps {
  url: string | undefined
  size: 'normal' | 'small'
}

const avatarDefault = Image.resolveAssetSource(avatar).uri

export const UserAvatar: React.FC<IUserAvatarProps> = ({ url, size }) => {
  return (
    <Container size={size}>
      <ImageAvatar source={{ uri: url ?? avatarDefault }} size={size} />
    </Container>
  )
}
