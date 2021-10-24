import { MotiView } from '@motify/components'
import styled from 'styled-components/native'

export const Container = styled(MotiView).attrs({
  from: {
    opacity: 0,
    translateY: -50
  },
  animate: {
    opacity: 1,
    translateY: 0
  },
  transition: {
    type: 'timing',
    duration: 700
  }
})`
  width: 100%;
  margin-bottom: 36px;
`

export const TextMessage = styled.Text`
  font-size: 15px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.white};
  line-height: 20px;
  margin-bottom: 12px;
`

export const UserContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;  
`

export const Subtitle = styled.Text`
  font-size: 15px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.white};
  margin-left: 12px;
`
