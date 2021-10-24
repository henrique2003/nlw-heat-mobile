import styled, { css } from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { colors as color } from '../../themes'

interface IUserAvatarProps {
  size: string
}

export const Container = styled(LinearGradient).attrs({
  colors: [color.pink, color.yellow],
  start: {
    x: 0,
    y: 0.8
  },
  end: {
    x: 0.9,
    y: 1
  }
})<IUserAvatarProps>`
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  ${props => props.size === 'normal'
? css`
    width: 48px;
    height: 48px;
  `
 : css`
    width: 34px;
    height: 34px;
  `}
`

export const ImageAvatar = styled.Image<IUserAvatarProps>`
  border-width: 3px;
  border-color: ${props => props.theme.colors.blackSecondary};
  border-radius: 50px;
  ${props => props.size === 'normal'
? css`
    width: 39px;
    height: 39px;
  `
 : css`
    width: 28px;
    height: 28px;
  `}
`
