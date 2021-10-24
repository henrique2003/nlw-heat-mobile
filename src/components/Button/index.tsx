import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { theme } from '../../themes'

import { Container, Text } from './styles'

type IButtonProps = TouchableOpacityProps & {
  title: string
  bgColor: 'pink' | 'yellow'
  color: 'white' | 'black'
  isLoading?: boolean
}

export const Button: React.FC<IButtonProps> = ({
  title,
  bgColor,
  color,
  isLoading = false,
  children,
  ...rest
}) => {
  return (
    <Container
      bgColor={bgColor}
      {...rest}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      {isLoading
        ? <ActivityIndicator color={theme.colors.blackPrimary} />
        : (
        <>
          {children}
          <Text color={color}>{title}</Text>
        </>
          )}
    </Container>
  )
}
